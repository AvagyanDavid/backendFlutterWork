import { db } from './connect.js';
import fs from 'fs';

export const ArtBegin = (req, res) => {
    db.query(`INSERT INTO ArtManagerBegin_StripBarsukKazan (Date,Time,ListArtist,Comment_ListArtist,CommentDirector_ListArtist,Readiness,Comment_Readiness,CommentDirector_Readiness,SendListOfGirls,Comment_SendListOfGirls,CommentDirector_SendListOfGirls,ListDJ,Comment_ListDJ,CommentDirector_ListDJ,AnalyzeGraph,Comment_AnalyzeGraph,CommentDirector_AnalyzeGraph,ControlArtistAnalize,Comment_ControlArtistAnalize,CommentDirector_ControlArtistAnalize,FiveMinutes,Comment_FiveMinutes,CommentDirector_FiveMinutes,FirstCard,SecondCard,ThirdCard,Comment_Card,CommentDirector_Card,Control1,Comment_Control1,Control2,Comment_Control2,Control3,Comment_Control3,Control4,Comment_Control4,Control5,Comment_Control5,ToyOrder,Comment_ToyOrder,CommentDirector_ToyOrder,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, req.body.listArtist, req.body.commentListArtist, req.body.commentDirectorListArtist, req.body.readiness, req.body.commentReadiness, req.body.commentDirectorReadiness, req.body.sendListOfGirls, req.body.commentSendListOfGirls, req.body.commentDirectorSendListOfGirls, req.body.listDJ, req.body.commentListDJ, req.body.commentDirectorListDJ, req.body.analyzeGraph, req.body.commentAnalyzeGraph, req.body.commentDirectorAnalyzeGraph, req.body.controlArtistAnalize, req.body.commentControlArtistAnalize, req.body.commentDirectorControlArtistAnalize, req.body.fiveMinutes, req.body.commentFiveMinutes, req.body.commentDirectorFiveMinutes, req.body.firstCard, req.body.secondCard, req.body.thirdCard, req.body.commentCard, req.body.commentDirectorCard, req.body.control1, req.body.commentControl1, req.body.control2, req.body.commentControl2, req.body.control3, req.body.commentControl3, req.body.control4, req.body.commentControl4, req.body.control5, req.body.commentControl5, req.body.toyOrder, req.body.commentToyOrder, req.body.commentDirectorToyOrder, req.body.idUsers],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.json(otvet[0]);
            }
        });
}

export const ShowArtBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select idArtManager,ArtManagerBegin_StripBarsukKazan.ListArtist, ArtManagerBegin_StripBarsukKazan.Comment_ListArtist, ArtManagerBegin_StripBarsukKazan.CommentDirector_ListArtist,ArtManagerBegin_StripBarsukKazan.Readiness, ArtManagerBegin_StripBarsukKazan.Comment_Readiness,ArtManagerBegin_StripBarsukKazan.CommentDirector_Readiness,ArtManagerBegin_StripBarsukKazan.SendListOfGirls, ArtManagerBegin_StripBarsukKazan.Comment_SendListOfGirls, ArtManagerBegin_StripBarsukKazan.CommentDirector_SendListOfGirls,ArtManagerBegin_StripBarsukKazan.ListDJ , ArtManagerBegin_StripBarsukKazan.Comment_ListDJ,  ArtManagerBegin_StripBarsukKazan.CommentDirector_ListDJ, ArtManagerBegin_StripBarsukKazan.AnalyzeGraph , ArtManagerBegin_StripBarsukKazan.Comment_AnalyzeGraph, ArtManagerBegin_StripBarsukKazan.CommentDirector_AnalyzeGraph,ArtManagerBegin_StripBarsukKazan.ControlArtistAnalize ,ArtManagerBegin_StripBarsukKazan.Comment_ControlArtistAnalize, ArtManagerBegin_StripBarsukKazan.CommentDirector_ControlArtistAnalize,ArtManagerBegin_StripBarsukKazan.FiveMinutes, ArtManagerBegin_StripBarsukKazan.Comment_FiveMinutes, ArtManagerBegin_StripBarsukKazan.CommentDirector_FiveMinutes,ArtManagerBegin_StripBarsukKazan.FirstCard , ArtManagerBegin_StripBarsukKazan.SecondCard, ArtManagerBegin_StripBarsukKazan.ThirdCard , ArtManagerBegin_StripBarsukKazan.Comment_Card,ArtManagerBegin_StripBarsukKazan.CommentDirector_Card,ArtManagerBegin_StripBarsukKazan.Control1, ArtManagerBegin_StripBarsukKazan.Comment_Control1,ArtManagerBegin_StripBarsukKazan.Control2 , ArtManagerBegin_StripBarsukKazan.Comment_Control2,ArtManagerBegin_StripBarsukKazan.Control3 , ArtManagerBegin_StripBarsukKazan.Comment_Control3,ArtManagerBegin_StripBarsukKazan.Control4 , ArtManagerBegin_StripBarsukKazan.Comment_Control4,ArtManagerBegin_StripBarsukKazan.Control5 , ArtManagerBegin_StripBarsukKazan.Comment_Control5,ArtManagerBegin_StripBarsukKazan.ToyOrder , ArtManagerBegin_StripBarsukKazan.Comment_ToyOrder, ArtManagerBegin_StripBarsukKazan.CommentDirector_ToyOrder from Users,ArtManagerBegin_StripBarsukKazan where ArtManagerBegin_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = ArtManagerBegin_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const ArtEnd = (req, res) => {
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
        }

    })
    let currentPath = `image/${newFileName}`;
    let reportCompletedArt = (req.body.reportCompletedArt === "true") ? 1 : 0;
    let reportCompleteMarket = (req.body.reportCompleteMarket === "true") ? 1 : 0;
    let art = (req.body.art === "true") ? 1 : 0;
    let bar = (req.body.bar === "true") ? 1 : 0;
    let market = (req.body.market === "true") ? 1 : 0;
    let hostes = (req.body.hostes === "true") ? 1 : 0;
    let orderDressingRoom = (req.body.orderDressingRoom === "true") ? 1 : 0;
    let idUser = Number(req.body.idUser);
    db.query(`INSERT INTO ArtManagerEnd_StripBarsukKazan (Date,Time,ReportCompletedArt,Comment_ReportCompleteArt,CommentDirector_ReportCompletedArt,ReportCompleteMarket,Comment_ReportCompleteMarket,CommentDirector_ReportCompleteMarket,
            Art,Bar,Market,Hostes,Comment_SendReportChat,CommentDirector_SendReportChat,OrderDressingRoom,OrderDressingRoomPhoto,Comment_OrderDressingRoom,CommentDirector_OrderDressingRoom,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, reportCompletedArt, req.body.commentReportCompletedArt, req.body.commentDirectorReportCompletedArt,
            reportCompleteMarket, req.body.commentReportCompleteMarket, req.body.commentDirectorReportCompleteMarket,
            art, bar, market, hostes, req.body.commentSendReportChat, req.body.commentDirectorSendReportChat,
            orderDressingRoom, currentPath, req.body.commentOrderDressingRoom, req.body.commentDirectorOrderDressingRoom, idUser],
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

export const ShowArtEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select ArtManagerEnd_StripBarsukKazan.idArtManagerEnd, ArtManagerEnd_StripBarsukKazan.Date, ArtManagerEnd_StripBarsukKazan.Time, ArtManagerEnd_StripBarsukKazan.ReportCompletedArt,ArtManagerEnd_StripBarsukKazan.Comment_ReportCompleteArt, ArtManagerEnd_StripBarsukKazan.CommentDirector_ReportCompletedArt, ArtManagerEnd_StripBarsukKazan.ReportCompleteMarket,ArtManagerEnd_StripBarsukKazan.Comment_ReportCompleteMarket, ArtManagerEnd_StripBarsukKazan.CommentDirector_ReportCompleteMarket, ArtManagerEnd_StripBarsukKazan.Art,ArtManagerEnd_StripBarsukKazan.Bar , ArtManagerEnd_StripBarsukKazan.Market,ArtManagerEnd_StripBarsukKazan.Hostes , ArtManagerEnd_StripBarsukKazan.Comment_SendReportChat, ArtManagerEnd_StripBarsukKazan.CommentDirector_SendReportChat,ArtManagerEnd_StripBarsukKazan.OrderDressingRoom ,ArtManagerEnd_StripBarsukKazan.OrderDressingRoomPhoto, ArtManagerEnd_StripBarsukKazan.Comment_OrderDressingRoom,ArtManagerEnd_StripBarsukKazan.CommentDirector_OrderDressingRoom from Users,ArtManagerEnd_StripBarsukKazan where ArtManagerEnd_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = ArtManagerEnd_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportArtBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users, ArtManagerBegin_StripBarsukKazan where ArtManagerBegin_StripBarsukKazan.Date = '${req.body.Date}' and ArtManagerBegin_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportArtEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,ArtManagerEnd_StripBarsukKazan where ArtManagerEnd_StripBarsukKazan.Date = '${req.body.Date}' and ArtManagerEnd_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const UpdateArtBegin = (req, res) => {
    db.query(`UPDATE ArtManagerBegin_StripBarsukKazan
    SET Time = ?,
    ListArtist = ?,
    Comment_ListArtist = ?,
    CommentDirector_ListArtist = ?,
    Readiness = ?,
    Comment_Readiness = ?,
    CommentDirector_Readiness = ?,
    SendListOfGirls = ?,
    Comment_SendListOfGirls = ?,
    CommentDirector_SendListOfGirls = ?,
    ListDJ = ?,
    Comment_ListDJ = ?,
    CommentDirector_ListDJ = ?,
    AnalyzeGraph = ?,
    Comment_AnalyzeGraph = ?,
    CommentDirector_AnalyzeGraph = ?,
    ControlArtistAnalize = ?,
    Comment_ControlArtistAnalize = ?,
    CommentDirector_ControlArtistAnalize = ?,
    FiveMinutes = ?,
    Comment_FiveMinutes = ?,
    CommentDirector_FiveMinutes = ?,
    FirstCard = ?,
    SecondCard = ?,
    ThirdCard = ?,
    Comment_Card = ?,
    CommentDirector_Card = ?,
    Control1 = ?,
    Comment_Control1 = ?,
    Control2 = ?,
    Comment_Control2 = ?,
    Control3 = ?,
    Comment_Control3 = ?,
    Control4 = ?,
    Comment_Control4 = ?,
    Control5 = ?,
    Comment_Control5 = ?,
    ToyOrder = ?,
    Comment_ToyOrder = ?,
    CommentDirector_ToyOrder = ?,
    Status = ?
    WHERE Date = ? AND idArtManager = ?`,
        [req.body.time, req.body.listArtist, req.body.commentListArtist, req.body.commentDirectorListArtist, req.body.readiness,
        req.body.commentReadiness, req.body.commentDirectorReadiness, req.body.sendListOfGirls, req.body.commentSendListOfGirls,
        req.body.commentDirectorSendListOfGirls, req.body.listDJ, req.body.commentListDJ, req.body.commentDirectorListDJ, req.body.analyzeGraph,
        req.body.commentAnalyzeGraph, req.body.commentDirectorAnalyzeGraph, req.body.controlArtistAnalize, req.body.commentControlArtistAnalize,
        req.body.commentDirectorControlArtistAnalize, req.body.fiveMinutes, req.body.commentFiveMinutes, req.body.commentDirectorFiveMinutes,
        req.body.firstCard, req.body.secondCard, req.body.thirdCard, req.body.commentCard, req.body.commentDirectorCard, req.body.control1,
        req.body.commentControl1, req.body.control2, req.body.commentControl2, req.body.control3, req.body.commentControl3, req.body.control4,
        req.body.commentControl4, req.body.control5, req.body.commentControl5, req.body.toyOrder, req.body.commentToyOrder,
        req.body.commentDirectorToyOrder, req.body.status, req.body.date, req.body.id], (error) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        }
    );
}
    
export const UpdateArtEnd = (req, res) => {
    let currentPath = `${req.body.currentPhoto}`;
    fs.rename('public/' + currentPath, 'temp_trash');
    let namePhoto = currentPath.split('/', 2);
    fs.rename(req.file.path, `${namePhoto[1]}`);
    let reportCompletedArt = (req.body.reportCompletedArt === "true") ? 1 : 0;
    let reportCompleteMarket = (req.body.reportCompleteMarket === "true") ? 1 : 0;
    let art = (req.body.art === "true") ? 1 : 0;
    let bar = (req.body.bar === "true") ? 1 : 0;
    let market = (req.body.market === "true") ? 1 : 0;
    let hostes = (req.body.hostes === "true") ? 1 : 0;
    let orderDressingRoom = (req.body.orderDressingRoom === "true") ? 1 : 0;
    db.query(`UPDATE 
    SET Time = ?,
    ReportCompletedArt = ?,
    Comment_ReportCompleteArt = ?,
    CommentDirector_ReportCompletedArt = ?,
    ReportCompleteMarket = ?,
    Comment_ReportCompleteMarket = ?,
    CommentDirector_ReportCompleteMarket = ?,
    Art = ?,
    Bar = ?,
    Market = ?,
    Hostes = ?,
    Comment_SendReportChat = ?,
    CommentDirector_SendReportChat = ?,
    OrderDressingRoom = ?,
    Comment_OrderDressingRoom = ?,
    CommentDirector_OrderDressingRoom = ?,
    Status = ?
    WHERE Date = ? AND idArtManagerEnd = ?`,
        [req.body.time, reportCompletedArt, req.body.commentReportCompletedArt, req.body.commentDirectorReportCompletedArt,
            reportCompleteMarket, req.body.commentReportCompleteMarket, req.body.commentDirectorReportCompleteMarket,
            art, bar, market, hostes, req.body.commentSendReportChat, req.body.commentDirectorSendReportChat,
            orderDressingRoom, req.body.commentOrderDressingRoom, req.body.commentDirectorOrderDressingRoom, req.body.status, req.body.date,
            req.body.id], (error) => {
            if (error) {
                console.log(error);
                fs.unlinkSync('public/' + currentPath);
                fs.rename('public/temp_trash', currentPath);
            } else {
                fs.unlinkSync('public/temp_trash');
                res.status(200);
            }
        }
    );
}

export const UpdateDirectorArtBegin = (req, res) => {
    db.query(`update ArtManagerBegin_StripBarsukKazan set CommentDirector_ListArtist = ?, CommentDirector_Readiness = ?, CommentDirector_SendListOfGirls = ?, CommentDirector_ListDJ = ?, CommentDirector_AnalyzeGraph = ?, CommentDirector_ControlArtistAnalize = ?, CommentDirector_FiveMinutes = ?, CommentDirector_Card = ?, CommentDirector_ToyOrder = ? where idArtManager = ? and Date = ?;`,
        [ req.body.commentDirectorListArtist, req.body.commentDirectorReadiness, req.body.commentDirectorSendListOfGirls, req.body.commentDirectorListDJ, req.body.commentDirectorAnalyzeGraph, req.body.commentDirectorControlArtistAnalize, req.body.commentDirectorFiveMinutes, req.body.commentDirectorCard, req.body.commentDirectorToyOrder, req.body.idUsers, req.body.date,],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}

export const UpdateDirectorArtEnd = (req, res) => {
    db.query(`update ArtManagerEnd_StripBarsukKazan set CommentDirector_ReportCompletedArt = ?, CommentDirector_ReportCompleteMarket = ?, CommentDirector_SendReportChat = ?, CommentDirector_OrderDressingRoom = ? where  idArtManagerEnd = ? and Date = ?;`,
        [req.body.commentDirectorReportCompletedArt,req.body.commentDirectorReportCompleteMarket, req.body.commentDirectorSendReportChat, req.body.commentDirectorOrderDressingRoom, idUser, req.body.date],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}