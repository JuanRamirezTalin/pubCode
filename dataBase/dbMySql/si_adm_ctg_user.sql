/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:30:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_ctg_user
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_ctg_user`;
CREATE TABLE `si_adm_ctg_user` (
  `USER_ID` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `USER` varchar(15) NOT NULL,
  `PWD` varchar(30) NOT NULL,
  `USER_NAME` varchar(40) NOT NULL,
  `ROL_ID` int(3) unsigned NOT NULL,
  `IS_EMPLOYEE` enum('Y','N') DEFAULT 'N' COMMENT 'N=no EsEmpleado Y=EsEmpleado',
  `EMPLOYEE_ID` int(9) unsigned NOT NULL DEFAULT 0,
  `IMAGE` varchar(50) DEFAULT NULL,
  `MALE_GENDER` enum('Y','N') DEFAULT 'Y',
  `USER_PERM` char(8) NOT NULL DEFAULT '00000000' COMMENT 'C,R,U,D,Data,SubirArchivo,X,X',
  `USER_EMAIL` varchar(100) DEFAULT ' ',
  `EXPIRES_IN` varchar(6) NOT NULL DEFAULT '-1',
  `ACTIVE_YN` enum('Y','N') DEFAULT 'Y' COMMENT 'N=inactivo Y=activo',
  `CREATE_AT` varchar(37) NOT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  `UPDATE_AT` varchar(37) DEFAULT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `si_adm_ctg_user_uk` (`USER`) USING BTREE,
  KEY `si_adm_ctg_user_fk` (`ROL_ID`) USING BTREE,
  CONSTRAINT `si_adm_ctg_user_fk_1` FOREIGN KEY (`ROL_ID`) REFERENCES `si_adm_ctg_rol` (`ROL_ID`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
