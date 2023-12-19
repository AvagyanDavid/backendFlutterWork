import { db } from './connect.js';
import fs from 'fs';

// отображение данных
export const ShowUser = (req, res) => {
    db.query("select * from Barsuk.Users WHERE idUsers = ?", [req.body.idUsers], (err, otvet) => {
        if (err) {
            console.log(err);
        } else {
            res.json(otvet[0]);
        }
    })
}

// отправка данных с условием
export const ShowHostBegin = (req, res) => {
    db.query('select HostBegin_StripBarsukKazan.TakeRadioTerminalTelephone, HostBegin_StripBarsukKazan.Comment_TakeRadioTerminalTelephone, HostBegin_StripBarsukKazan.SendMessageTelegram,HostBegin_StripBarsukKazan.SendMessageWatsApp, HostBegin_StripBarsukKazan.Comment_SendMessage, Users.Login from Users, HostBegin_StripBarsukKazan where HostBegin_StripBarsukKazan.Date = ? and Users.idUsers = HostBegin_StripBarsukKazan.Users_idUsers',
    [req.body.Date], (error, otvet) => {
        if (error) { 
            console.log(error);
        } else {
            console.log(req.body.Date);
            console.log(otvet);
            res.json(otvet[0]);
        }
    }
    )
}


export const ShowHostEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select HostEnd_StripBarsukKazan.ChargerRadioTerminalTelephone,HostEnd_StripBarsukKazan.Comment_ChargerRadioTerminalTelephone, HostEnd_StripBarsukKazan.CleanWorkplace, HostEnd_StripBarsukKazan.WorkplacePhoto, Users.Login
        from HostEnd_StripBarsukKazan, Users where HostEnd_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = HostEnd_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet[0]);
        }
    }
    )
}


// отправка данных без фотографии
export const HostBegin = (req, res) => {
    db.query(`INSERT INTO HostBegin_StripBarsukKazan (Date,Time,TakeRadioTerminalTelephone, Comment_TakeRadioTerminalTelephone,CommentDirector_TakeRadioTerminalTelephone,SendMessageWatsApp,SendMessageTelegram, Comment_SendMessage, CommentDirector_SendMessage, Users_idUsers) VALUES (?,?,?, ?, ?, ?, ?, ?, ?,?)`,
        [req.body.date, req.body.time, req.body.takeRadioTerminalTelephone, req.body.commentTakeRadioTerminalTelephone,req.body.commentDirectorTakeRadioTerminalTelephone,
            req.body.sendMessageWatsApp, req.body.sendMessageTelegram, req.body.commentSendMessage,req.body.commentDirectorSendMessage,
            req.body.idUsers],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}

// отправка данных с фотографией(одной)
export const HostEnd = (req, res) => {
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    let time = date.toTimeString().split(" ")[0];
    console.log(req.file);
    console.log(req.body);
    const file = req.file;
    const newFileName = today + "_" + time + "_" + file.originalname;
    fs.rename(req.file.path, `${req.file.destination}${newFileName}`, (error) => {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            let currentPath = `image/${newFileName}`;
            let chargeRadioTerminalTelephone = (req.body.chargeRadioTerminalTelephone === "true") ? 1 : 0;
            let cleanlinessWorkplaceHost = (req.body.cleanlinessWorkplaceHost === "true") ? 1 : 0;
            let idUser = Number(req.body.idUser);
            db.query(`INSERT INTO HostEnd_StripBarsukKazan (Date,Time,ChargerRadioTerminalTelephone,Comment_ChargerRadioTerminalTelephone,CommentDirector_ChargerRadioTerminalTelephone,CleanWorkplace,WorkplacePhoto,Comment_Workplace,CommentDirector_Workplace,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?)`,
                [req.body.date, req.body.time, chargeRadioTerminalTelephone, req.body.commentChargeRadioTerminalTelephone, req.body.commentDirectorChargeRadioTerminalTelephone, cleanlinessWorkplaceHost, currentPath, req.body.commentCleanlinessWorkplaceHost, req.body.commentDirectorCleanlinessWorkplaceHost, idUser],
                (err, otvet) => {
                    if (err) {
                        console.log(err);
                        fs.unlinkSync('public/' + currentPath);
                        res.status(400);
                    } else {
                        res.status(200);
                    }
                });
        }
    })
}

export const CheckReportHostBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,HostBegin_StripBarsukKazan where HostBegin_StripBarsukKazan.Date = '${req.body.Date}' and HostBegin_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportHostEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,HostEnd_StripBarsukKazan where HostEnd_StripBarsukKazan.Date = '${req.body.Date}' and HostEnd_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet[0]);
        }
    }
    )
}

export const UpdateHostBegin = (req, res) => {
    db.query(`update HostBegin_StripBarsukKazan set CommentDirector_TakeRadioTerminalTelephone = ?, CommentDirector_SendMessage = ? where idHostBegin = ? and Date = ?;`,
        [req.body.commentDirectorTakeRadioTerminalTelephone,req.body.commentDirectorSendMessage,req.body.idUsers, req.body.date],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        }
    );
}

export const UpdateHostEnd = (req, res) => {
    db.query(`update HostEnd_StripBarsukKazan set CommentDirector_ChargerRadioTerminalTelephone = ?, CommentDirector_Workplace = ? where idHostEnd = ? and Date = ?;`,
        [req.body.commentDirectorChargeRadioTerminalTelephone, req.body.commentDirectorCleanlinessWorkplaceHost,req.body.idUsers,req.body.date],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}




