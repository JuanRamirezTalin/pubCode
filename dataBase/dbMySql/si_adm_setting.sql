/*
Navicat MariaDB Data Transfer

Source Server         : dbMaria
Source Server Version : 100420
Source Host           : localhost:33068
Source Database       : gestion_capital_humanos

Target Server Type    : MariaDB
Target Server Version : 100420
File Encoding         : 65001

Date: 2022-09-09 21:32:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for si_adm_setting
-- ----------------------------
DROP TABLE IF EXISTS `si_adm_setting`;
CREATE TABLE `si_adm_setting` (
  `ID_SET` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SET_CODE` varchar(25) NOT NULL COMMENT 'COFIGURACION DEL SISTEMA',
  `SET_GROUP` varchar(10) NOT NULL COMMENT 'COFIGURACION DEL SISTEMA',
  `DESCRIPTION` varchar(50) NOT NULL,
  `VALUE` varchar(50) NOT NULL,
  `ACTIVE_YN` enum('Y','N') DEFAULT 'Y' COMMENT 'N= false  Y=true',
  PRIMARY KEY (`ID_SET`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
