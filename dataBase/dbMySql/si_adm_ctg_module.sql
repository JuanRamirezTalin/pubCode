/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:30:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_ctg_module
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_ctg_module`;
CREATE TABLE `si_adm_ctg_module` (
  `MODULE_ID` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `MODULE_SUPERIOR_ID` int(8) unsigned NOT NULL DEFAULT 0,
  `MODULE_SUPERIOR_REF` int(8) unsigned NOT NULL,
  `DESCRIPTION` varchar(30) NOT NULL,
  `ICON` varchar(15) NOT NULL DEFAULT '',
  `END_POINT` varchar(50) NOT NULL DEFAULT '',
  `IS_END_POINT` enum('Y','N') DEFAULT 'N' COMMENT 'N=branch   Y=endPoint',
  `ACTIVE_YN` enum('Y','N') DEFAULT 'Y' COMMENT 'N=inactivo Y=activo',
  `CREATE_AT` varchar(37) NOT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  `UPDATE_AT` varchar(37) DEFAULT '' COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  PRIMARY KEY (`MODULE_ID`),
  KEY `si_adm_ctg_modulos_fk` (`MODULE_SUPERIOR_ID`),
  CONSTRAINT `si_adm_ctg_module_fk1` FOREIGN KEY (`MODULE_SUPERIOR_ID`) REFERENCES `si_adm_ctg_module` (`MODULE_ID`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
