import  express from "express";
import { CheckReportHostBegin, CheckReportHostEnd,HostBegin, HostEnd, ShowHostBegin,ShowHostEnd, UpdateHostBegin, UpdateHostEnd } from "../database/host.js";
import { ArtBegin, ArtEnd, CheckReportArtBegin, CheckReportArtEnd, ShowArtBegin, ShowArtEnd, UpdateDirectorArtBegin, UpdateDirectorArtEnd} from "../database/art.js";
import { WaiterBegin, WaiterEnd, CheckReportWaiterBegin, CheckReportWaiterEnd,ShowWaiterEnd, ShowWaiterBegin, UpdateWaiterBegin, UpdateWaiterEnd} from "../database/waiter.js";
import { BarmanBegin, BarmanEnd, CheckReportBarmanBegin,CheckReportBarmanEnd ,ShowBarmanBegin, ShowBarmanEnd,UpdateBarmanBegin,UpdateBarmanEnd} from "../database/barman.js";
import multer from "multer";
import { ShowUser, Registration, Authorization, BranchSelection, BranchId } from "../database/query.js";
import { CheckReportCleaningBegin, CheckReportCleaningEnd, CleaningBegin, CleaningEnd, ShowCleaningBegin, ShowCleaningEnd, UpdateCleaningBegin, UpdateCleaningEnd } from "../database/cleaning.js";

const router = express.Router();
const upload = multer({ dest: 'public/image/'});

// Host
router.post("/ShowHostBegin", ShowHostBegin); //  данные передаются скрытно 
router.post("/ShowHostEnd", ShowHostEnd);
router.post("/HostBegin", HostBegin);
router.post("/HostEnd", upload.single('cleanlinessWorkplaceHostFile'), HostEnd);
// Art
router.post("/ArtBegin",ArtBegin);
router.post("/ArtEnd",upload.single('orderDressingRoomFile'), ArtEnd);
router.post("/ShowArtBegin", ShowArtBegin);
router.post("/ShowArtEnd",ShowArtEnd);
// router.post('/UpdateArtBegin', UpdateArtBegin);
// router.post('/UpdateArtEnd', UpdateArtEnd);
router.post('/UpdateDirectorArtBegin', UpdateDirectorArtBegin);
router.post('/UpdateDirectorArtEnd', UpdateDirectorArtEnd);
//Waiter
router.post("/WaiterBegin", upload.fields([
    {name : 'tableArrangementFile', maxCount: 1},
    {name : 'wipeTheTablesFile', maxCount: 1},
    {name: 'inspectionOfTheHallFile', maxCount: 1},
    {name: 'arrangeOttomansFile', maxCount: 1},
    {name: 'putEverythingOnTheTablesFile', maxCount: 1},
    {name: 'wipeMenuFile', maxCount: 1}
]), WaiterBegin);
router.post("/WaiterEnd", WaiterEnd);
router.post("/ShowWaiterBegin",ShowWaiterBegin);
router.post("/ShowWaiterEnd",ShowWaiterEnd);
//Barman
router.post('/BarmanBegin', upload.fields([
    {name: 'checkAndTakeAlcogolFile', maxCount: 1},
    {name: 'rubTheDishesFile', maxCount: 1},
    {name: 'cleaningFile', maxCount : 1},
]), BarmanBegin);
router.post('/BarmanEnd', upload.single('cleanlinessWorkplaceFile'), BarmanEnd);
router.post('/ShowBarmanBegin', ShowBarmanBegin);
router.post('/ShowBarmanEnd', ShowBarmanEnd);
//Cleaning
router.post('/CleaningBegin', CleaningBegin);
router.post('/CleaningEnd', CleaningEnd);
router.post('/ShowCleaningBegin', ShowCleaningBegin);
router.post('/ShowCleaningEnd', ShowCleaningEnd);

// Проверка на наличие отчета
router.post('/CheckReportHostBegin', CheckReportHostBegin);
router.post('/CheckReportHostEnd', CheckReportHostEnd);
router.post('/CheckReportArtBegin', CheckReportArtBegin);
router.post('/CheckReportArtEnd', CheckReportArtEnd); 
router.post('/CheckReportBarmanBegin', CheckReportBarmanBegin);
router.post('/CheckReportBarmanEnd', CheckReportBarmanEnd);
router.post('/CheckReportWaiterBegin', CheckReportWaiterBegin);
router.post('/CheckReportWaiterEnd', CheckReportWaiterEnd);
router.post('/CheckReportCleaningBegin', CheckReportCleaningBegin);
router.post('/CheckReportCleaningEnd', CheckReportCleaningEnd);

router.post('/UpdateHostBegin', UpdateHostBegin);
router.post('/UpdateHostEnd', UpdateHostEnd);
router.post('/UpdateWaiterBegin', UpdateWaiterBegin);
router.post('/UpdateWaiterEnd', UpdateWaiterEnd);
router.post('/UpdateBarmanBegin', UpdateBarmanBegin);
router.post('/UpdateBarmanEnd', UpdateBarmanEnd);
router.post('/UpdateCleaningBegin', UpdateCleaningBegin);
router.post('/UpdateCleaningEnd', UpdateCleaningEnd);

router.post('/Registration', Registration);
router.post('/Authorization', Authorization);
router.post("/ShowUser", ShowUser);
router.post("/BranchId", BranchId);
router.post("/BranchSelection", BranchSelection);

export default router;