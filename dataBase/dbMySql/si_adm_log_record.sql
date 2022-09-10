/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:33:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_log_record
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_log_record`;
CREATE TABLE `si_adm_log_record` (
  `ID_ACTION` char(16) NOT NULL COMMENT 'AAAAmmddhhmmss',
  `TYPE_ACTION` enum('CREATE','REPORT','UPDATE','DELETE','EXPORT') NOT NULL DEFAULT 'REPORT',
  `ID_TBL` int(8) unsigned NOT NULL,
  `DATE_LAST` varchar(37) DEFAULT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600',
  `NOTE` varchar(340) DEFAULT NULL,
  KEY `si_adm_log_record_fk` (`ID_TBL`),
  KEY `si_adm_log_record` (`ID_ACTION`) USING HASH,
  CONSTRAINT `si_adm_log_record_fk` FOREIGN KEY (`ID_TBL`) REFERENCES `si_adm_ctl_tbl` (`ID_TBL`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
