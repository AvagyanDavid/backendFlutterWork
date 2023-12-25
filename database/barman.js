import fs from 'fs';
import {db} from './connect.js'

export const BarmanBegin = (req, res) => {
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    let time = date.toTimeString().split(" ")[0];

    const newName = {
        "checkAndTakeAlcogolFile": null,
        "rubTheDishesFile": null,
        "wipeDustShelvingBeginFile": null,
        "cleaningFile": null,
    };

    const currentPath = {
        "checkAndTakeAlcogolFile": null,
        "rubTheDishesFile": null,
        "wipeDustShelvingBeginFile": null,
        "cleaningFile": null,
    };

    for (let p in req.files) {
        newName[p] = today + "_" + time + "_" + req.files[p][0].originalname; // add new new name in array newName
        fs.rename(req.files[p][0].path, `${req.files[p][0].destination}${newName[p]}`, (error) => {
            if (error) {
                console.log(error);
                res.json(error);
                fs.unlinkSync(req.files[p][0].path);
            }
        });
        currentPath[p] = `image/${newName[p]}`;
    }

    let openCheckout = (req.body.openCheckout === "true") ? 1 : 0;
    let checkAndTakeAlcogol = (req.body.checkAndTakeAlcogol === "true") ? 1 : 0;
    let extractorHumidifier = (req.body.extractorHumidifier === "true") ? 1 : 0;
    let writeStopList = (req.body.writeStopList === "true") ? 1 : 0;
    let rubTheDishes = (req.body.wipeMenu === "true") ? 1 : 0;
    let cleaning = (req.body.cleaning === "true") ? 1 : 0;
    let wipeDustShelvingBegin = (req.body.wipeDustShelvingBegin === "true") ? 1 : 0;    
    let idUser = Number(req.body.idUser);

    db.query(`INSERT INTO BarmanBegin_StripBarsukKazan (Date,Time,OpenCheckout,Comment_OpenCheckout,CommentDirector_OpenCheckout,CheckAndTakeAlcogol,CheckAndTakeAlcogolPhoto,
           Comment_CheckAndTakeAlcogol,CommentDirector_CheckAndTakeAlcogol,ExtractorHumidifier,Comment_ExtractorHumidifier,CommentDirector_ExtractorHumidifier,WriteStopList,
               Comment_WriteStopList, CommentDirector_WriteStopList,  RubTheDishes,RubTheDishesPhoto,Comment_RubTheDishes,CommentDirector_RubTheDishes,
               wipeDustShelving, WipeDustShelvingPhoto, Comment_WipeDustShelving, CommentDirector_WipeDustShelving,
               Cleaning,CleaningPhoto,Comment_Cleaning,CommentDirector_Cleaning, Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, openCheckout, req.body.commentOpenCheckout, req.body.commentDirectorOpenCheckout,
        checkAndTakeAlcogol, currentPath['checkAndTakeAlcogolFile'],req.body.commentCheckAndTakeAlcogol,req.body.commentDirectorCheckAndTakeAlcogol,
        extractorHumidifier,req.body.commentExtractorHumidifier,req.body.commentDirectorExtractorHumidifier,
        writeStopList, req.body.commentWriteStopList, req.body.commentDirectorWriteStopList,
        rubTheDishes,currentPath['rubTheDishesFile'], req.body.commentRubTheDishes, req.body.commentDirectorRubTheDishes,
        wipeDustShelvingBegin, currentPath['wipeDustShelvingBeginFile'],req.body.commentWipeDustShelvingBegin, req.body.commentDirectorWipeDustShelvingBegin,
        cleaning, currentPath['cleaningFile'], req.body.commentCleaning, req.body.commentDirectorCleaning, idUser],
    (error, otvet) => {
        if (error) {
            console.log(error);
            for (var i in currentPath) {
                fs.unlinkSync('public/' + currentPath[i]);
                console.log(`Remove image from ${currentPath[i]}`);
            }
            res.status(400);
        } else {
            res.status(200);
        }
    });
}

export const BarmanEnd = (req, res) => {
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    let time = date.toTimeString().split(" ")[0];

    const newName = {
        "cleanlinessWorkplaceFile" : null,
        "wipeDustShelvingEndFile": null,
    };

    const currentPath = {
        "cleanlinessWorkplaceFile" : null,
        "wipeDustShelvingEndFile": null,
    };

    for (let p in req.files) {
        newName[p] = today + "_" + time + "_" + req.files[p][0].originalname; // add new new name in array newName
        fs.rename(req.files[p][0].path, `${req.files[p][0].destination}${newName[p]}`, (error) => {
            if (error) {
                console.log(error);
                res.json(error);
                fs.unlinkSync(req.files[p][0].path);
            }
        });
        currentPath[p] = `image/${newName[p]}`;
    }

    let alcogol = (req.body.alcogol === "true") ? 1 : 0;
    let nonalcogol = (req.body.nonalcogol === "true") ? 1 : 0;
    let tobacco = (req.body.tobacco === 'true') ? 1 : 0;
    let fillOutReport = (req.body.fillOutReport === 'true') ? 1 : 0;
    let closeShift = (req.body.closeShift === 'true') ? 1 : 0;
    let cleanlinessWorkplace = (req.body.cleanlinessWorkplace === 'true')? 1 : 0;
    let wipeDustShelvingEnd = (req.body.wipeDustShelvingEnd === 'true')? 1 : 0;
                
    let idUser = Number(req.body.idUser);

    db.query(`INSERT INTO BarmanEnd_StripBarsukKazan (Date,Time,Alcogol,Nonalcogol,Tobacco,Comment_Application,CommentDirector_Application,FillOutReport,Comment_FillOutReport,
        CommentDirector_FillOutReport,CloseShift,Comment_CloseShift,CommentDirector_CloseShift,CleanlinessWorkplace,CleanlinessWorkplacePhoto,Comment_CleanlinessWorkplace,
        CommentDirector_CleanlinessWorkplace,WipeDustShelving,WipeDustShelvingPhoto,Comment_WipeDustShelving,CommentDirector_WipeDustShelving,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, alcogol, nonalcogol, tobacco,req.body.commentApplication, req.body.commentDirectorApplication,
        fillOutReport,req.body.commentFillOutReport, req.body.commentDirectorFillOutReport,
        closeShift, req.body.commentCloseShift, req.body.commentDirectorCloseShift,
        cleanlinessWorkplace, currentPath['cleanlinessWorkplaceFile'], req.body.commentCleanlinessWorkplace, req.body.commentDirectorCleanlinessWorkplace,
        wipeDustShelvingEnd,currentPath['wipeDustShelvingEndFile'],req.body.commentWipeDustShelvingEnd,req.body.commentDirectorWipeDustShelvingEnd,idUser],
        (err) => {
            if (err) {
                console.log(err);
                for (var i in currentPath) {
                    fs.unlinkSync('public/' + currentPath[i]);
                    console.log(`Remove image from ${currentPath[i]}`);
                }
                res.status(400);
            } else {
                res.status(200);
            }
        });
}

export const ShowBarmanBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select OpenCheckout,Comment_OpenCheckout,CommentDirector_OpenCheckout,
        CheckAndTakeAlcogol,CheckAndTakeAlcogolPhoto,Comment_CheckAndTakeAlcogol,CommentDirector_CheckAndTakeAlcogol,
        ExtractorHumidifier,Comment_ExtractorHumidifier,CommentDirector_ExtractorHumidifier,
        WriteStopList,Comment_WriteStopList, CommentDirector_WriteStopList,
        RubTheDishes,RubTheDishesPhoto,Comment_RubTheDishes,CommentDirector_RubTheDishes,
        WipeDustShelving, WipeDustShelvingPhoto, Comment_WipeDustShelving, CommentDirector_WipeDustShelving,
        Cleaning,CleaningPhoto,Comment_Cleaning,CommentDirector_Cleaning, Users.Login, Users_idUsers
        from Users, BarmanBegin_StripBarsukKazan where BarmanBegin_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = BarmanBegin_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const ShowBarmanEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Alcogol,Nonalcogol,Tobacco,Comment_Application,CommentDirector_Application,
        FillOutReport,Comment_FillOutReport,CommentDirector_FillOutReport,
        CloseShift,Comment_CloseShift,CommentDirector_CloseShift,
        CleanlinessWorkplace,CleanlinessWorkplacePhoto,Comment_CleanlinessWorkplace,CommentDirector_CleanlinessWorkplace,
        WipeDustShelving,WipeDustShelvingPhoto,Comment_WipeDustShelving,CommentDirector_WipeDustShelving, Users.Login, Users_idUsers
        from Users, BarmanEnd_StripBarsukKazan where BarmanEnd_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = BarmanEnd_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportBarmanBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,BarmanBegin_StripBarsukKazan where BarmanBegin_StripBarsukKazan.Date = '${req.body.Date}' and BarmanBegin_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportBarmanEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,BarmanEnd_StripBarsukKazan where BarmanEnd_StripBarsukKazan.Date = '${req.body.Date}' and BarmanEnd_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const UpdateBarmanBegin = (req, res) => {
   db.query(`update BarmanBegin_StripBarsukKazan set CommentDirector_OpenCheckout = ?, CommentDirector_CheckAndTakeAlcogol = ?, CommentDirector_ExtractorHumidifier = ?, CommentDirector_WriteStopList = ?, CommentDirector_RubTheDishes = ?, CommentDirector_WipeDustShelving = ?, CommentDirector_Cleaning = ? where Users_idUsers = ? and Date = ?`,
        [req.body.commentDirectorOpenCheckout,req.body.commentDirectorCheckAndTakeAlcogol,req.body.commentDirectorExtractorHumidifier,req.body.commentDirectorWriteStopList,req.body.commentDirectorRubTheDishes, req.body.commentDirectorWipeDustSelvingBegin, req.body.commentDirectorCleaning,req.body.idUsers,req.body.date],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}

export const UpdateBarmanEnd = (req, res) => {
    db.query(`update BarmanEnd_StripBarsukKazan set CommentDirector_Application = ?, CommentDirector_FillOutReport = ?, CommentDirector_CloseShift = ?, CommentDirector_CleanlinessWorkplace = ?, CommentDirector_WipeDustShelving = ? where Users_idUsers = ? and Date = ?`,
        [req.body.commentDirectorApplication,req.body.commentDirectorFillOutReport,req.body.commentDirectorCloseShift, req.body.commentDirectorCleanlinessWorkplace, req.body.commentDirectorWipeDustShelvingEnd,req.body.idUsers,req.body.date],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}

