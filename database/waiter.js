import fs from 'fs';
import {db} from './connect.js'

export const WaiterBegin = (req, res) => {
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    let time = date.toTimeString().split(" ")[0];
    // const files = req.files;

    const newName = {
        "tableArrangementFile": null,
        "wipeTheTablesFile": null,
        "inspectionOfTheHallFile": null,
        "arrangeOttomansFile": null,
        "putEverythingOnTheTablesFile": null,
        "wipeMenuFile": null
    };

    const currentPath = {
        "tableArrangementFile": null,
        "wipeTheTablesFile": null,
        "inspectionOfTheHallFile": null,
        "arrangeOttomansFile": null,
        "putEverythingOnTheTablesFile": null,
        "wipeMenuFile": null
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

    let tableArrangement = (req.body.tableArrangement === "true") ? 1 : 0;
    let wipeTheTables = (req.body.wipeTheTables === "true") ? 1 : 0;
    let inspectionOfTheHall = (req.body.inspectionOfTheHall === "true") ? 1 : 0;
    let arrangeOttomans = (req.body.arrangeOttomans === "true") ? 1 : 0;
    let putEverythingOnTheTables = (req.body.putEverythingOnTheTables === "true") ? 1 : 0;
    let wipeMenu = (req.body.wipeMenu === "true") ? 1 : 0;
    let cleanWineCabinet = (req.body.cleanWineCabinet === "true") ? 1 : 0;
    let fillTheNapkinHolder = (req.body.fillTheNapkinHolder === "true") ? 1 : 0;
    let garbageEmpty = (req.body.garbageEmpty === "true") ? 1 : 0;
    let passDishesKitchen = (req.body.passDishesKitchen === "true") ? 1 : 0;
    let requestStartAndStopList = (req.body.requestStartAndStopList === "true") ? 1 : 0;
    let cleanHumidor = (req.body.cleanHumidor === "true") ? 1 : 0;
    let idUser = Number(req.body.idUser);

    db.query(`INSERT INTO WaiterBegin_StripBarsukKazan (Date,Time,TableArrangement,TableArrangementPhoto,Comment_TableArrangment,CommentDirector_TableArrangment,WipeTheTables,WipeTheTablesPhoto,Comment_WipeTheTables,CommentDirector_WipeTheTables,InspectionOfTheHall,InspectionOfTheHallPhoto,Comment_InspectionOfTheHall,CommentDirector_InspectionOfTheHall,ArrangeOttomans,ArrangeOttomansPhoto,Comment_ArrangeOttomans,CommentDirector_ArrangeOttomans,PutEverythingOnTheTables,PutEverythingOnTheTablesPhoto,Comment_PutEverithingOnTheTables,CommentDirector_PutEverithingOnTheTables,WipeMenu,WipeMenuPhoto,Comment_WipeMenu,CommentDirector_WipeMenu,CleanWineCabinet,Comment_CleanWineCabinet,CommentDirector_CleanWineCabinet,FillTheNapkinHolder,Comment_FillTheNapkinHolder,CommentDirector_FillTheNapkinHolder,GarbageEmpty,Comment_GarbageEmpty,CommentDirector_GarbageEmpty,PassDishesKitchen,Comment_PassDishesKitchen,CommentDirector_PassDishesKitchen,RequestStartAndStopList,Comment_RequestStartAndStopList,CommentDirector_RequestStartAndStopList,CleanHumidor,Comment_CleanHumidor,CommentDirector_CleanHumidor,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, tableArrangement, currentPath['tableArrangementFile'], req.body.commentTableArrangment,req.body.commentDirectorTableArrangment, wipeTheTables,currentPath['wipeTheTablesFile'], req.body.commentWipeTheTables, req.body.commentDirectorWipeTheTables, inspectionOfTheHall, currentPath['inspectionOfTheHallFile'], req.body.commentInspectionOfTheHall, req.body.commentDirectorInspectionOfTheHall, arrangeOttomans, currentPath['arrangeOttomansFile'],req.body.commentArrangeOttomans, req.body.commentDirectorArrangeOttomans, putEverythingOnTheTables, currentPath['putEverythingOnTheTablesFile'], req.body.commentPutEverithingOnTheTables, req.body.commentDirectorPutEverithingOnTheTables, wipeMenu, currentPath['wipeMenuFile'], req.body.commentWipeMenu, req.body.commentDirectorWipeMenu, cleanWineCabinet, req.body.commentCleanWineCabinet, req.body.commentDirectorCleanWineCabinet, fillTheNapkinHolder, req.body.commentFillTheNapkinHolder, req.body.commentDirectorFillTheNapkinHolder, garbageEmpty, req.body.commentGarbageEmpty, req.body.commentDirectorGarbageEmpty, passDishesKitchen, req.body.commentPassDishesKitchen, req.body.commentDirectorPassDishesKitchen, requestStartAndStopList, req.body.commentRequestStartAndStopList, req.body.commentDirectorRequestStartAndStopList, cleanHumidor, req.body.commentCleanHumidor ,req.body.commentDirectorCleanHumidor,idUser],
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

export const WaiterEnd = (req, res) => {
    db.query(`INSERT INTO WaiterEnd_StripBarsukKazan (Date,Time,ChargerCandle,Comment_ChargerCandle,CommentDirector_ChargerCandle,FixOttomansAndTables,Comment_FixOttomansAndTables,CommentDirector_FixOttomansAndTables,CleanTables,Comment_CleanTables,CommentDirector_CleanTables,PutAwayTheNapkins,Comment_PutAwayTheNapkins,CommentDirector_PutAwayTheNapkins,Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.date, req.body.time, req.body.chargerCandle, req.body.commentСhargerCandle, req.body.commentDirectorChargerCandle, req.body.fixOttomansAndTables, req.body.commentFixOttomansAndTables, req.body.commentDirectorFixOttomansAndTables, req.body.cleanTables, req.body.commentCleanTables, req.body.commentDirectorCleanTables, req.body.putAwayTheNapkins, req.body.commentPutAwayTheNapkins, req.body.commentDirectorPutAwayTheNapkins, req.body.idUsers],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200);
            }
        });
}





export const ShowWaiterBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select WaiterBegin_StripBarsukKazan.TableArrangement, WaiterBegin_StripBarsukKazan.TableArrangementPhoto,WaiterBegin_StripBarsukKazan.Comment_TableArrangment,WaiterBegin_StripBarsukKazan.CommentDirector_TableArrangment, WaiterBegin_StripBarsukKazan.WipeTheTables,WaiterBegin_StripBarsukKazan.WipeTheTablesPhoto, WaiterBegin_StripBarsukKazan.Comment_WipeTheTables, WaiterBegin_StripBarsukKazan.CommentDirector_WipeTheTables,WaiterBegin_StripBarsukKazan.InspectionOfTheHall, WaiterBegin_StripBarsukKazan.InspectionOfTheHallPhoto,WaiterBegin_StripBarsukKazan.Comment_InspectionOfTheHall,WaiterBegin_StripBarsukKazan.CommentDirector_InspectionOfTheHall,WaiterBegin_StripBarsukKazan.ArrangeOttomans,WaiterBegin_StripBarsukKazan.ArrangeOttomansPhoto,WaiterBegin_StripBarsukKazan.Comment_ArrangeOttomans,WaiterBegin_StripBarsukKazan.CommentDirector_ArrangeOttomans,WaiterBegin_StripBarsukKazan.PutEverythingOnTheTables,WaiterBegin_StripBarsukKazan.PutEverythingOnTheTablesPhoto,WaiterBegin_StripBarsukKazan.Comment_PutEverithingOnTheTables,WaiterBegin_StripBarsukKazan.CommentDirector_PutEverithingOnTheTables,WaiterBegin_StripBarsukKazan.WipeMenu,WaiterBegin_StripBarsukKazan.WipeMenuPhoto,WaiterBegin_StripBarsukKazan.Comment_WipeMenu,WaiterBegin_StripBarsukKazan.CommentDirector_WipeMenu,WaiterBegin_StripBarsukKazan.CleanWineCabinet,WaiterBegin_StripBarsukKazan.Comment_CleanWineCabinet,WaiterBegin_StripBarsukKazan.CommentDirector_CleanWineCabinet,WaiterBegin_StripBarsukKazan.FillTheNapkinHolder,WaiterBegin_StripBarsukKazan.Comment_FillTheNapkinHolder,WaiterBegin_StripBarsukKazan.CommentDirector_FillTheNapkinHolder,WaiterBegin_StripBarsukKazan.GarbageEmpty,WaiterBegin_StripBarsukKazan.Comment_GarbageEmpty,WaiterBegin_StripBarsukKazan.CommentDirector_GarbageEmpty,WaiterBegin_StripBarsukKazan.PassDishesKitchen,WaiterBegin_StripBarsukKazan.Comment_PassDishesKitchen,WaiterBegin_StripBarsukKazan.CommentDirector_PassDishesKitchen,WaiterBegin_StripBarsukKazan.RequestStartAndStopList,WaiterBegin_StripBarsukKazan.Comment_RequestStartAndStopList,WaiterBegin_StripBarsukKazan.CommentDirector_RequestStartAndStopList,WaiterBegin_StripBarsukKazan.CleanHumidor,WaiterBegin_StripBarsukKazan.Comment_CleanHumidor,WaiterBegin_StripBarsukKazan.CommentDirector_CleanHumidor, Users.Login 
        from WaiterBegin_StripBarsukKazan, Users where WaiterBegin_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = WaiterBegin_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const ShowWaiterEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select WaiterEnd_StripBarsukKazan.ChargerCandle, WaiterEnd_StripBarsukKazan.Comment_ChargerCandle,WaiterEnd_StripBarsukKazan.CommentDirector_ChargerCandle, WaiterEnd_StripBarsukKazan.FixOttomansAndTables,WaiterEnd_StripBarsukKazan.Comment_FixOttomansAndTables,WaiterEnd_StripBarsukKazan.CommentDirector_FixOttomansAndTables, WaiterEnd_StripBarsukKazan.CleanTables,WaiterEnd_StripBarsukKazan.Comment_CleanTables,WaiterEnd_StripBarsukKazan.CommentDirector_CleanTables, WaiterEnd_StripBarsukKazan.PutAwayTheNapkins, WaiterEnd_StripBarsukKazan.Comment_PutAwayTheNapkins,  WaiterEnd_StripBarsukKazan.CommentDirector_PutAwayTheNapkins
        from Users, WaiterEnd_StripBarsukKazan where WaiterEnd_StripBarsukKazan.Date = '${req.body.Date}' AND Users.idUsers = WaiterEnd_StripBarsukKazan.Users_idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportWaiterBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,WaiterBegin_StripBarsukKazan where WaiterBegin_StripBarsukKazan.Date = '${req.body.Date}' and WaiterBegin_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportWaiterEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,WaiterEnd_StripBarsukKazan where WaiterEnd_StripBarsukKazan.Date = '${req.body.Date}' and WaiterEnd_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

// export const UpdateWaiterBegin = (req, res) => {
//     // db.query(``,
//         [req.body.date, req.body.time, req.body.takeRadioTerminalTelephone, req.body.commentTakeRadioTerminalTelephone,req.body.commentDirectorTakeRadioTerminalTelephone,
//             req.body.sendMessageWatsApp, req.body.sendMessageTelegram, req.body.commentSendMessage,req.body.commentDirectorSendMessage,
//             req.body.idUsers],
//         (error, otvet) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 res.status(200);
//             }
//         });
// }

// export const UpdateWaiterEnd = (req, res) => {
//     // db.query(``,
//         [req.body.date, req.body.time, req.body.takeRadioTerminalTelephone, req.body.commentTakeRadioTerminalTelephone,req.body.commentDirectorTakeRadioTerminalTelephone,
//             req.body.sendMessageWatsApp, req.body.sendMessageTelegram, req.body.commentSendMessage,req.body.commentDirectorSendMessage,
//             req.body.idUsers],
//         (error, otvet) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 res.status(200);
//             }
//         });
// }
