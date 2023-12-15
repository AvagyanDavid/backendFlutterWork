-- MySQL Workbench Synchronization
-- Generated: 2023-11-21 22:44
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: David

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `Barsuk` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `Barsuk`.`Users` (
  `idUsers` INT(11) NOT NULL AUTO_INCREMENT,
  `Login` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Post` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE INDEX `Login_UNIQUE` (`Login` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`ArtManagerBegin_StripBarsukKazan` (
  `idArtManager` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `ListArtist` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ListArtist` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ListArtist` TINYTEXT NULL DEFAULT NULL,
  `Readiness` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Readiness` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_Readiness` TINYTEXT NULL DEFAULT NULL,
  `SendListOfGirls` TINYINT(4) NULL DEFAULT NULL,
  `Comment_SendListOfGirls` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_SendListOfGirls` TINYTEXT NULL DEFAULT NULL,
  `ListDJ` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ListDJ` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ListDJ` TINYTEXT NULL DEFAULT NULL,
  `AnalyzeGraph` TINYINT(4) NULL DEFAULT NULL,
  `Comment_AnalyzeGraph` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_AnalyzeGraph` TINYTEXT NULL DEFAULT NULL,
  `ControlArtistAnalize` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ControlArtistAnalize` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ControlArtistAnalize` TINYTEXT NULL DEFAULT NULL,
  `FiveMinutes` TINYINT(4) NULL DEFAULT NULL,
  `Comment_FiveMinutes` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_FiveMinutes` TINYTEXT NULL DEFAULT NULL,
  `FirstCard` TINYINT(4) NULL DEFAULT NULL,
  `SecondCard` TINYINT(4) NULL DEFAULT NULL,
  `ThirdCard` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Card` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_Card` TINYTEXT NULL DEFAULT NULL,
  `Control1` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Control1` TINYTEXT NULL DEFAULT NULL,
  `Control2` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Control2` TINYTEXT NULL DEFAULT NULL,
  `Control3` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Control3` TINYTEXT NULL DEFAULT NULL,
  `Control4` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Control4` TINYTEXT NULL DEFAULT NULL,
  `Control5` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Control5` TINYTEXT NULL DEFAULT NULL,
  `ToyOrder` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ToyOrder` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ToyOrder` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idArtManager`),
  INDEX `fk_ArtManagerBegin_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_ArtManagerBegin_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`ArtManagerEnd_StripBarsukKazan` (
  `idArtManagerEnd` INT(11) NOT NULL,
  `Date` DATETIME NOT NULL,
  `DateTime` DATETIME NULL DEFAULT NULL,
  `ReportCompletedArt` TINYINT(4) NULL DEFAULT NULL,
  `Commit_ReportCompleteArt` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ReportCompletedArt` TINYTEXT NULL DEFAULT NULL,
  `ReportCompleteMarket` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ReportCompleteMarket` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ReportCompleteMarket` TINYTEXT NULL DEFAULT NULL,
  `Art` TINYINT(4) NULL DEFAULT NULL,
  `Bar` TINYINT(4) NULL DEFAULT NULL,
  `Market` TINYINT(4) NULL DEFAULT NULL,
  `Hostes` TINYINT(4) NULL DEFAULT NULL,
  `Comment_SendReportChat` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_SendReportChat` TINYTEXT NULL DEFAULT NULL,
  `OrderDressingRoom` TINYINT(4) NULL DEFAULT NULL,
  `OrderDressingRoomPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_OrderDressingRoom` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_OrderDressingRoom` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idArtManagerEnd`),
  INDEX `fk_ArtManagerEnd_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_ArtManagerEnd_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`BarmanBegin_StripBarsukKazan` (
  `idBarman` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `OpenCheckout` TINYINT(4) NULL DEFAULT NULL,
  `Comment_OpenCheckout` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_OpenCheckout` TINYTEXT NULL DEFAULT NULL,
  `CheckAndTakeAlcogol` TINYINT(4) NULL DEFAULT NULL,
  `CheckAndTakeAlcogolPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_CheckAndTakeAlcogol` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CheckAndTakeAlcogol` TINYTEXT NULL DEFAULT NULL,
  `ExtractorHumidifier` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ExtractorHumidifier` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ExtractorHumidifier` TINYTEXT NULL DEFAULT NULL,
  `WriteStopList` TINYINT(4) NULL DEFAULT NULL,
  `Comment_WriteStopList` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_WriteStopList` TINYTEXT NULL DEFAULT NULL,
  `RubTheDishes` TINYINT(4) NULL DEFAULT NULL,
  `RubTheDishesPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_RubTheDishes` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_RubTheDishes` TINYTEXT NULL DEFAULT NULL,
  `Cleaning` TINYINT(4) NULL DEFAULT NULL,
  `CleaningPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_Cleaning` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_Cleaning` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idBarman`),
  INDEX `fk_BarmanBegin_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_BarmanBegin_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`BarmanEnd_StripBarsukKazan` (
  `idBarmanEnd` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  ` DateTime` DATETIME NULL DEFAULT NULL,
  `Alcogol` TINYINT(4) NULL DEFAULT NULL,
  `NonAlcogol` TINYINT(4) NULL DEFAULT NULL,
  `Tobacco` TINYINT(4) NULL DEFAULT NULL,
  `Comment_Application` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_Application` TINYTEXT NULL DEFAULT NULL,
  `FillOutReport` TINYINT(4) NULL DEFAULT NULL,
  `Comment_FillOutReport` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_FillOutReport` TINYTEXT NULL DEFAULT NULL,
  `CloseShift` TINYINT(4) NULL DEFAULT NULL,
  `Comment_CloseShift` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CloseShift` TINYTEXT NULL DEFAULT NULL,
  `CleanlinessWorkplace` TINYINT(4) NULL DEFAULT NULL,
  `CleanlinessWorkplacePhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_CleanlinessWorkplace` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CleanlinessWorkplace` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idBarmanEnd`),
  INDEX `fk_BarmanEnd_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_BarmanEnd_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`HostBegin_StripBarsukKazan` (
  `idHostBegin` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `TakeRadioTerminalTelephone` TINYINT(4) NULL DEFAULT NULL,
  `CommentWorker_TakeRadioTerminalTelephone` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_TakeRadioTerminalTelephone` TINYTEXT NULL DEFAULT NULL,
  `SendMessageTelegram` TINYINT(4) NULL DEFAULT NULL,
  `SendMessageWatsApp` TINYINT(4) NULL DEFAULT NULL,
  `CommentWorker_SendMessage` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_SendMessage` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idHostBegin`),
  INDEX `fk_HostBegin_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_HostBegin_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`HostEnd_StripBarsukKazan` (
  `idHostEnd` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `ChargerRadioTerminalTelephone` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ChargerRadioTerminalTelephone` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ChargerRadioTerminalTelephone` TINYTEXT NULL DEFAULT NULL,
  `CleanWorkplace` TINYINT(4) NULL DEFAULT NULL,
  `WorkplacePhoto` LONGBLOB NULL DEFAULT NULL,
  `Comment_Workplace` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_Workplace` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idHostEnd`),
  INDEX `fk_HostEnd_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_HostEnd_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`WaiterBegin_StripBarsukKazan` (
  `idWaiterBegin` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `TableArrangement` TINYINT(4) NULL DEFAULT NULL,
  `TableArrangementPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_TableArrangment` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_TableArrangment` TINYTEXT NULL DEFAULT NULL,
  `WipeTheTables` TINYINT(4) NULL DEFAULT NULL,
  `WipeTheTablesPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_WipeTheTables` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_WipeTheTables` TINYTEXT NULL DEFAULT NULL,
  `InspectionOfTheHall` TINYINT(4) NULL DEFAULT NULL,
  `InspectionOfTheHallPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_InspectionOfTheHall` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_InspectionOfTheHall` TINYTEXT NULL DEFAULT NULL,
  `ArrangeOttomans` TINYINT(4) NULL DEFAULT NULL,
  `ArrangeOttomansPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_ArrangeOttomans` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ArrangeOttomans` TINYTEXT NULL DEFAULT NULL,
  `PutEverythingOnTheTables` TINYINT(4) NULL DEFAULT NULL,
  `PutEverythingOnTheTablesPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_PutEverithingOnTheTables` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_PutEverithingOnTheTables` TINYTEXT NULL DEFAULT NULL,
  `WipeMenu` TINYINT(4) NULL DEFAULT NULL,
  `WipeMenuPhotoBLOB` LONGBLOB NULL DEFAULT NULL,
  `Comment_WipeMenu` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_WipeMenu` TINYTEXT NULL DEFAULT NULL,
  `CleanWineCabinet` TINYINT(4) NULL DEFAULT NULL,
  `Comment_CleanWineCabinet` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CleanWineCabinet` TINYTEXT NULL DEFAULT NULL,
  `FillTheNapkinHolder` TINYINT(4) NULL DEFAULT NULL,
  `Comment_FillTheNapkinHolder` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_FillTheNapkinHolder` TINYTEXT NULL DEFAULT NULL,
  `GarbageEmpty` TINYINT(4) NULL DEFAULT NULL,
  `Comment_GarbageEmpty` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_GarbageEmpty` TINYTEXT NULL DEFAULT NULL,
  `PassDishesKitchen` TINYINT(4) NULL DEFAULT NULL,
  `Comment_PassDishesKitchen` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_PassDishesKitchen` TINYTEXT NULL DEFAULT NULL,
  `RequestStartAndStopList` TINYINT(4) NULL DEFAULT NULL,
  `Comment_RequestStartAndStopList` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_RequestStartAndStopList` TINYTEXT NULL DEFAULT NULL,
  `CleanHumidor` TINYINT(4) NULL DEFAULT NULL,
  `Comment_CleanHumidor` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CleanHumidor` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idWaiterBegin`),
  INDEX `fk_WaiterBegin_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_WaiterBegin_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Barsuk`.`WaiterEnd_StripBarsukKazan` (
  `idWaiterEnd` INT(11) NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `ChargerCandle` TINYINT(4) NULL DEFAULT NULL,
  `Comment_ChargerCandle` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_ChargerCandle` TINYTEXT NULL DEFAULT NULL,
  `FixOttomansAndTables` TINYINT(4) NULL DEFAULT NULL,
  `Comment_FixOttomansAndTables` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_FixOttomansAndTables` TINYTEXT NULL DEFAULT NULL,
  `CleanTables` TINYINT(4) NULL DEFAULT NULL,
  `Comment_CleanTables` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_CleanTables` TINYTEXT NULL DEFAULT NULL,
  `PutAwayTheNapkins` TINYINT(4) NULL DEFAULT NULL,
  `Comment_PutAwayTheNapkins` TINYTEXT NULL DEFAULT NULL,
  `CommentDirector_PutAwayTheNapkins` TINYTEXT NULL DEFAULT NULL,
  `Users_idUsers` INT(11) NOT NULL,
  PRIMARY KEY (`idWaiterEnd`),
  INDEX `fk_WaiterEnd_StripBarsukKazan_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_WaiterEnd_StripBarsukKazan_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Barsuk`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
