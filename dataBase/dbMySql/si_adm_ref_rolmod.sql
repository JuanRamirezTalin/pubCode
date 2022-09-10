/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:31:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_ref_rolmod
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_ref_rolmod`;
CREATE TABLE `si_adm_ref_rolmod` (
  `MODULE_ID` int(8) unsigned NOT NULL,
  `ROL_ID` int(3) unsigned NOT NULL,
  PRIMARY KEY (`MODULE_ID`,`ROL_ID`),
  KEY `si_adm_ref_rol_menu_fk_2` (`ROL_ID`),
  CONSTRAINT `si_adm_ref_rol_menu_fk` FOREIGN KEY (`MODULE_ID`) REFERENCES `si_adm_ctg_module` (`MODULE_ID`) ON UPDATE NO ACTION,
  CONSTRAINT `si_adm_ref_rol_menu_fk1` FOREIGN KEY (`ROL_ID`) REFERENCES `si_adm_ctg_rol` (`ROL_ID`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
