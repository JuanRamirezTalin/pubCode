/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:30:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_ctg_rol
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_ctg_rol`;
CREATE TABLE `si_adm_ctg_rol` (
  `ROL_ID` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `ROL_CVE` varchar(13) NOT NULL,
  `DESCRIPTION` varchar(50) NOT NULL,
  `IMAGE` varchar(15) DEFAULT NULL,
  `ROL_PERM` char(8) NOT NULL DEFAULT '00000000' COMMENT 'C,R,U,D,Data,SubirArchivo,X,X',
  `ACTIVE_YN` enum('Y','N') DEFAULT 'Y' COMMENT 'N=inactivo Y=activo',
  `CREATE_AT` varchar(37) NOT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  `UPDATE_AT` varchar(37) DEFAULT NULL COMMENT 'IDusuario_IDrol_AAAA-mm-ddThh:mm:ss+0600   Separado por "_"',
  PRIMARY KEY (`ROL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
