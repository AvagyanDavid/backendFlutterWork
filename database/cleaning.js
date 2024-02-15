import { db } from './connect.js';

export const CleaningBegin = (req, res) => {
    db.query(`insert into CleaningBegin_StripBarsukKazan (Date, Time, WashFloors, WipeTablesWindowShelves, Comment_Cabinet, CommentDirector_Cabinet,
         Corridor, Relax, Guestbook, Toilet,WipeWindowSills, WipePanelBox, WipePaintings, WipeInteriorDoors, Comment_FirstFloor, CommentDirector_FirstFloor,
          WipeWalls, CleanSinks, CleanToilets, WipeMirrors, WipeDispensers, FillDispensers, Comment_Toilets, CommentDirector_Toilets,
        WashStairsSecondFloor, Comment_WashStairsSecondFloor, CommentDirector_WashStairsSecondFloor,
         WashFloorsSecondFloor, WashStage, WipeLargeMirror, Vacuum, WipeBaseboardsOnColumn, PrepareCrazyRoom, Comment_SecondFloor, CommentDirector_SecondFloor,
         WashFloorsBar, WashDishesBar, Comment_Bar, CommentDirector_Bar,
         WashFloorsAlice, WipeMirrorsHallway, FillDispensersAlice, WipeBathroomMirror, CleanSinkToilet, WipeReception, WipeTableGuestRoom, VacuumStairs, Comment_Alice, CommentDirector_Alice, 
         TakeAllTrash, Comment_TakeAllTrash, CommentDirector_TakeAllTrash,
         WipeIronWindowSills, WipeDoorSign, RemoveCobwebs, EmptyTrashCan, Comment_Street, CommentDirector_Street,
         CheckRoomsCobwebs, Comment_CheckRoomsCobwebs, CommentDirector_CheckRoomsCobwebs,
         CheckCleanlinessBathrooms1, Comment_CheckCleanlinessBathrooms1,CheckCleanlinessBathrooms2, Comment_CheckCleanlinessBathrooms2,CheckCleanlinessBathrooms3, Comment_CheckCleanlinessBathrooms3, CheckCleanlinessBathrooms4, Comment_CheckCleanlinessBathrooms4,
         CheckCleanlinessBathrooms5, Comment_CheckCleanlinessBathrooms5, CheckCleanlinessBathrooms6, Comment_CheckCleanlinessBathrooms6, CheckCleanlinessBathrooms7, Comment_CheckCleanlinessBathrooms7, CheckCleanlinessBathrooms8, Comment_CheckCleanlinessBathrooms8, 
         CheckCleanlinessBathrooms9,Comment_CheckCleanlinessBathrooms9, CheckCleanlinessBathrooms10, Comment_CheckCleanlinessBathrooms10,  CheckCleanlinessBathrooms11, Comment_CheckCleanlinessBathrooms11, CheckCleanlinessBathrooms12, Comment_CheckCleanlinessBathrooms12,
         CheckCleanlinessBathrooms13, Comment_CheckCleanlinessBathrooms13, CheckCleanlinessBathrooms14,Comment_CheckCleanlinessBathrooms14, CheckCleanlinessBathrooms15,  Comment_CheckCleanlinessBathrooms15, CheckCleanlinessBathrooms16, Comment_CheckCleanlinessBathrooms16, CommentDirector_CheckCleanlinessBathrooms, Users_idUsers ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
       [req.body.date, req.body.time, req.body.washFloors, req.body.wipeTablesWindowShelves, req.body.commentCabinet, req.body.commentDirectorCabinet, req.body.corridor, req.body.relax, req.body.guestbook, req.body.toilet, req.body.wipeWindowSills, req.body.wipePanelBox, req.body.wipePaintings, req.body.wipeInteriorDoors, req.body.commentFirstFloor, req.body.commentDirectorFirstFloor, req.body.wipeWalls, req.body.cleanSinks, req.body.cleanToilets, req.body.wipeMirrors, req.body.wipeDispensers, req.body.fillDispensers, req.body.commentToilets, req.body.commentDirectorToilets, req.body.washStairsSecondFloor, req.body.commentWashStairsSecondFloor, req.body.commentDirectorWashStairsSecondFloor, req.body.washFloorsSecondFloor, req.body.washStage, req.body.wipeLargeMirror, req.body.vacuum, req.body.wipeBaseboardsOnColumn, req.body.prepareCrazyRoom, req.body.commentSecondFloor, req.body.commentDirectorSecondFloor, req.body.washFloorsBar, req.body.washDishesBar, req.body.commentBar, req.body.commentDirectorBar, req.body.washFloorsAlice, req.body.wipeMirrorsHallway, req.body.fillDispensersAlice,req.body.wipeBathroomMirror,req.body.cleanSinkToilet,req.body.wipeReception,req.body.wipeTableGuestRoom,req.body.vacuumStairs,req.body.commentAlice,req.body.commentDirectorAlice,req.body.takeAllTrash,req.body.commentTakeAllTrash,req.body.commentDirectorTakeAllTrash,req.body.wipeIronWindowSills,req.body.wipeDoorSign,req.body.removeCobwebs,req.body.emptyTrashCan,req.body.commentStreet,req.body.commentDirectorStreet,req.body.checkRoomsCobwebs,req.body.commentCheckRoomsCobwebs,req.body.commentDirectorCheckRoomsCobwebs,req.body.checkCleanlinessBathrooms1,req.body.commentCheckCleanlinessBathrooms1,req.body.checkCleanlinessBathrooms2,req.body.commentCheckCleanlinessBathrooms2,req.body.checkCleanlinessBathrooms3,req.body.commentCheckCleanlinessBathrooms3,req.body.checkCleanlinessBathrooms4,req.body.commentCheckCleanlinessBathrooms4,req.body.checkCleanlinessBathrooms5,req.body.commentCheckCleanlinessBathrooms5,req.body.checkCleanlinessBathrooms6,req.body.commentCheckCleanlinessBathrooms6,req.body.checkCleanlinessBathrooms7,req.body.commentCheckCleanlinessBathrooms7,req.body.checkCleanlinessBathrooms8,req.body.commentCheckCleanlinessBathrooms8,req.body.checkCleanlinessBathrooms9,req.body.commentCheckCleanlinessBathrooms9,req.body.checkCleanlinessBathrooms10,req.body.commentCheckCleanlinessBathrooms10,req.body.checkCleanlinessBathrooms11,req.body.commentCheckCleanlinessBathrooms11,req.body.checkCleanlinessBathrooms12,req.body.commentCheckCleanlinessBathrooms12,req.body.checkCleanlinessBathrooms13,req.body.commentCheckCleanlinessBathrooms13,req.body.checkCleanlinessBathrooms14,req.body.commentCheckCleanlinessBathrooms14,req.body.checkCleanlinessBathrooms15,req.body.commentCheckCleanlinessBathrooms15,req.body.checkCleanlinessBathrooms16,req.body.commentCheckCleanlinessBathrooms16,req.body.commentDirectorCheckCleanlinessBathrooms,req.body.idUser],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.json(otvet[0]);
            }
        });
}

export const CleaningEnd = (req, res) => {
    db.query(`insert into CleaningEnd_StripBarsukKazan (Date, Time,EmptyTrashCansAllBathrooms, Comment_EmptyTrashCansAllBathrooms,CommentDirector_EmptyTrashCansAllBathrooms, EmptyTrashCanStreet, Comment_EmptyTrashCanStreet, CommentDirector_EmptyTrashCanStreet, WashFloorsAllRooms, Comment_WashFloorsAllRooms, CommentDirector_WashFloorsAllRooms, TakeTrashStorageRoom,Comment_TakeTrashStorageRoom, CommentDirector_TakeTrashStorageRoom, CountNumberCleanTowels, Comment_CountNumberCleanTowels, CommentDirector_CountNumberCleanTowels, Users_idUsers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
       [req.body.date, req.body.time, req.body.emptyTrashCansAllBathrooms, req.body.commentEmptyTrashCansAllBathrooms, req.body.commentDirectorEmptyTrashCansAllBathrooms, req.body.emptyTrashCanStreet, req.body.commentEmptyTrashCanStreet, req.body.commentDirectorEmptyTrashCanStreet, req.body.washFloorsAllRooms, req.body.commentWashFloorsAllRooms, req.body.commentDirectorWashFloorsAllRooms, req.body.takeTrashStorageRoom, req.body.commentTakeTrashStorageRoom, req.body.commentDirectorTakeTrashStorageRoom, req.body.countNumberCleanTowels, req.body.commentCountNumberCleanTowels, req.body.commentDirectorCountNumberCleanTowels,req.body.idUser],
        (error, otvet) => {
            if (error) {
                console.log(error);
            } else {
                res.json(otvet[0]);
            }
        });
}

export const ShowCleaningBegin = (req,res) => {
    db.query({
        dateStrings: true,
        sql:`select CleaningBegin_StripBarsukKazan.WashFloors, CleaningBegin_StripBarsukKazan.WipeTablesWindowShelves, CleaningBegin_StripBarsukKazan.Comment_Cabinet, CleaningBegin_StripBarsukKazan.CommentDirector_Cabinet, 
    CleaningBegin_StripBarsukKazan.Corridor, CleaningBegin_StripBarsukKazan.Relax, CleaningBegin_StripBarsukKazan.Guestbook, CleaningBegin_StripBarsukKazan.Toilet, CleaningBegin_StripBarsukKazan.WipeWindowSills, CleaningBegin_StripBarsukKazan.WipePanelBox, CleaningBegin_StripBarsukKazan.WipePaintings, CleaningBegin_StripBarsukKazan.WipeInteriorDoors, CleaningBegin_StripBarsukKazan.Comment_FirstFloor, CleaningBegin_StripBarsukKazan.CommentDirector_FirstFloor,
    CleaningBegin_StripBarsukKazan.WipeWalls, CleaningBegin_StripBarsukKazan.CleanSinks, CleaningBegin_StripBarsukKazan.CleanToilets, CleaningBegin_StripBarsukKazan.WipeMirrors, CleaningBegin_StripBarsukKazan.WipeDispensers, CleaningBegin_StripBarsukKazan.FillDispensers, CleaningBegin_StripBarsukKazan.Comment_Toilets, CleaningBegin_StripBarsukKazan.CommentDirector_Toilets,
    CleaningBegin_StripBarsukKazan.WashStairsSecondFloor, CleaningBegin_StripBarsukKazan.Comment_WashStairsSecondFloor, CleaningBegin_StripBarsukKazan.CommentDirector_WashStairsSecondFloor,
    CleaningBegin_StripBarsukKazan.WashFloorsSecondFloor, CleaningBegin_StripBarsukKazan.WashStage, CleaningBegin_StripBarsukKazan.WipeLargeMirror, CleaningBegin_StripBarsukKazan.Vacuum, CleaningBegin_StripBarsukKazan.WipeBaseboardsOnColumn, CleaningBegin_StripBarsukKazan.PrepareCrazyRoom, CleaningBegin_StripBarsukKazan.Comment_SecondFloor, CleaningBegin_StripBarsukKazan.CommentDirector_SecondFloor,
    CleaningBegin_StripBarsukKazan.WashFloorsBar, CleaningBegin_StripBarsukKazan.WashDishesBar, CleaningBegin_StripBarsukKazan.Comment_Bar, CleaningBegin_StripBarsukKazan.CommentDirector_Bar,
    CleaningBegin_StripBarsukKazan.WashFloorsAlice, CleaningBegin_StripBarsukKazan.WipeMirrorsHallway, CleaningBegin_StripBarsukKazan.FillDispensersAlice,CleaningBegin_StripBarsukKazan.WipeBathroomMirror, CleaningBegin_StripBarsukKazan.CleanSinkToilet, CleaningBegin_StripBarsukKazan.WipeReception, CleaningBegin_StripBarsukKazan.WipeTableGuestRoom, CleaningBegin_StripBarsukKazan.VacuumStairs, CleaningBegin_StripBarsukKazan.Comment_Alice, CleaningBegin_StripBarsukKazan.CommentDirector_Alice,
    CleaningBegin_StripBarsukKazan.TakeAllTrash, CleaningBegin_StripBarsukKazan.Comment_TakeAllTrash, CleaningBegin_StripBarsukKazan.CommentDirector_TakeAllTrash,
    CleaningBegin_StripBarsukKazan.WipeIronWindowSills,CleaningBegin_StripBarsukKazan.WipeDoorSign,CleaningBegin_StripBarsukKazan.RemoveCobwebs,CleaningBegin_StripBarsukKazan.EmptyTrashCan,CleaningBegin_StripBarsukKazan.Comment_Street,CleaningBegin_StripBarsukKazan.CommentDirector_Street,
    CleaningBegin_StripBarsukKazan.CheckRoomsCobwebs,CleaningBegin_StripBarsukKazan.Comment_CheckRoomsCobwebs,CleaningBegin_StripBarsukKazan.CommentDirector_CheckRoomsCobwebs,
    CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms1,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms1,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms2,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms2,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms3,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms3,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms4,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms4,
    CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms5,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms5,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms6,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms6,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms7,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms7,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms8,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms8,
    CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms9,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms9,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms10,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms10,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms11,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms11,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms12,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms12,
    CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms13,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms13,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms14,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms14,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms15,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms15,CleaningBegin_StripBarsukKazan.CheckCleanlinessBathrooms16,CleaningBegin_StripBarsukKazan.Comment_CheckCleanlinessBathrooms16,CleaningBegin_StripBarsukKazan.CommentDirector_CheckCleanlinessBathrooms,
    Users.Login, Users_idUsers from CleaningBegin_StripBarsukKazan, Users where CleaningBegin_StripBarsukKazan.Date = '${req.body.Date}' and Users.idUsers = CleaningBegin_StripBarsukKazan.Users_idUsers;`
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

export const ShowCleaningEnd = (req,res) => {
    db.query(`select CleaningEnd_StripBarsukKazan.EmptyTrashCansAllBathrooms, CleaningEnd_StripBarsukKazan.Comment_EmptyTrashCansAllBathrooms, CleaningEnd_StripBarsukKazan.CommentDirector_EmptyTrashCansAllBathrooms,
    CleaningEnd_StripBarsukKazan.EmptyTrashCanStreet, CleaningEnd_StripBarsukKazan.Comment_EmptyTrashCanStreet, CleaningEnd_StripBarsukKazan.CommentDirector_EmptyTrashCanStreet,
    CleaningEnd_StripBarsukKazan.WashFloorsAllRooms, CleaningEnd_StripBarsukKazan.Comment_WashFloorsAllRooms, CleaningEnd_StripBarsukKazan.CommentDirector_WashFloorsAllRooms,
    CleaningEnd_StripBarsukKazan.TakeTrashStorageRoom, CleaningEnd_StripBarsukKazan.Comment_TakeTrashStorageRoom, CleaningEnd_StripBarsukKazan.CommentDirector_TakeTrashStorageRoom,
    CleaningEnd_StripBarsukKazan.CountNumberCleanTowels, CleaningEnd_StripBarsukKazan.Comment_CountNumberCleanTowels,CleaningEnd_StripBarsukKazan.CommentDirector_CountNumberCleanTowels,
    Users.Login, Users.idUsers from CleaningEnd_StripBarsukKazan, Users where CleaningEnd_StripBarsukKazan.Date = ? and Users.idUsers = CleaningEnd_StripBarsukKazan.Users_idUsers;`,
    [req.body.Date], (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(otvet);
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportCleaningBegin = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,CleaningBegin_StripBarsukKazan where CleaningBegin_StripBarsukKazan.Date = '${req.body.Date}' and CleaningBegin_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const CheckReportCleaningEnd = (req, res) => {
    db.query({
        dateStrings: true,
        sql: `select Users.Login from Users,CleaningEnd_StripBarsukKazan where CleaningEnd_StripBarsukKazan.Date = '${req.body.Date}' and CleaningEnd_StripBarsukKazan.Users_idUsers = Users.idUsers;`
    }, (error, otvet) => {
        if (error) {
            console.log(error);
        } else {
            res.json(otvet[0]);
        }
    }
    )
}

export const UpdateCleaningBegin = (req, res) => {
    db.query(`update CleaningBegin_StripBarsukKazan set CommentDirector_Cabinet = ?, CommentDirector_FirstFloor = ?, CommentDirector_Toilets = ?, CommentDirector_WashStairsSecondFloor = ?, CommentDirector_SecondFloor = ?, CommentDirector_Bar = ?, CommentDirector_Alice = ?, CommentDirector_TakeAllTrash = ?, CommentDirector_Street = ?, CommentDirector_CheckRoomsCobwebs = ?, CommentDirector_CheckCleanlinessBathrooms = ? where Users_idUsers = ? and Date = ?`,
         [req.body.commentDirectorCabinet,req.body.commentDirectorFirstFloor,req.body.commentDirectorToilets,req.body.commentDirectorWashStairsSecondFloor,req.body.commentDirectorSecondFloor, req.body.commentDirectorBar, req.body.commentDirectorAlice,req.body.commentDirectorTakeAllTrash, req.body.commentDirectorStreet, req.body.commentDirectorCheckRoomsCobwebs, req.body.commentDirectorCheckCleanlinessBathrooms, req.body.idUsers,req.body.date],
         (error, otvet) => {
             if (error) {
                 console.log(error);
             } else {
                 res.status(200);
             }
         });
}

export const UpdateCleaningEnd = (req, res) => {
    db.query(`update CleaningEnd_StripBarsukKazan set CommentDirector_EmptyTrashCansAllBathrooms = ?, CommentDirector_EmptyTrashCanStreet = ?, CommentDirector_WashFloorsAllRooms = ?, CommentDirector_TakeTrashStorageRoom = ?, CommentDirector_CountNumberCleanTowels = ?  where Users_idUsers = ? and Date = ?`,
         [req.body.commentDirectorEmptyTrashCansAllBathrooms,req.body.commentDirectorEmptyTrashCanStreet,req.body.commentDirectorWashFloorsAllRooms,req.body.commentDirectorTakeTrashStorageRoom,req.body.commentDirectorCountNumberCleanTowels, req.body.idUsers,req.body.date],
         (error, otvet) => {
             if (error) {
                 console.log(error);
             } else {
                 res.status(200);
             }
         });
}