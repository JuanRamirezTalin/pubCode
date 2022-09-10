/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:32:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_ref_userol
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_ref_userol`;
CREATE TABLE `si_adm_ref_userol` (
  `USER_ID` int(8) unsigned NOT NULL,
  `ROL_ID` int(3) unsigned NOT NULL,
  PRIMARY KEY (`USER_ID`,`ROL_ID`),
  KEY `si_adm_ref_user_rol_fk2` (`ROL_ID`) USING BTREE,
  CONSTRAINT `si_adm_ref_userol_fk1` FOREIGN KEY (`USER_ID`) REFERENCES `si_adm_ctg_user` (`USER_ID`) ON UPDATE NO ACTION,
  CONSTRAINT `si_adm_ref_userol_fk2` FOREIGN KEY (`ROL_ID`) REFERENCES `si_adm_ctg_rol` (`ROL_ID`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
