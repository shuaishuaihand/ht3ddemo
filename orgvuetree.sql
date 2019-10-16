/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : orgvuetree

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-10-16 10:13:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hospital_space
-- ----------------------------
DROP TABLE IF EXISTS `hospital_space`;
CREATE TABLE `hospital_space` (
  `id` bigint(16) NOT NULL AUTO_INCREMENT COMMENT ' ID',
  `name` varchar(64) DEFAULT NULL COMMENT '名称',
  `pid` bigint(16) DEFAULT NULL COMMENT '父ID',
  `sortno` int(8) DEFAULT NULL COMMENT '排序名称',
  `grade` int(2) DEFAULT NULL COMMENT '层级',
  `del_flag` int(2) DEFAULT '0' COMMENT '0-正常 1-已删除',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=480 DEFAULT CHARSET=utf8 COMMENT='空间位置';

-- ----------------------------
-- Records of hospital_space
-- ----------------------------
INSERT INTO `hospital_space` VALUES ('1', '医院总部', '0', '1', '1', '0', '/images/space/1.png', '医院总部', 'admin', '2019-08-14 14:55:09', 'admin', '2019-08-02 14:44:50');
INSERT INTO `hospital_space` VALUES ('2', '医技楼1号楼', '1', '1', null, '0', null, null, 'admin', '2019-08-02 14:45:13', '', null);
INSERT INTO `hospital_space` VALUES ('3', '楼层一', '462', '1', null, '1', null, null, 'admin', '2019-08-06 15:48:35', '', null);
INSERT INTO `hospital_space` VALUES ('4', '楼层二', '462', '2', null, '1', null, null, 'admin', '2019-08-06 15:48:54', '', null);
INSERT INTO `hospital_space` VALUES ('5', '楼层三', '462', '3', null, '1', null, null, 'admin', '2019-08-06 17:23:23', '', null);
INSERT INTO `hospital_space` VALUES ('6', '楼层四', '462', '4', null, '1', null, null, 'admin', '2019-08-06 17:24:13', '', null);
INSERT INTO `hospital_space` VALUES ('7', '楼层五', '462', '5', null, '1', null, null, 'admin', '2019-08-07 14:03:06', '', null);
INSERT INTO `hospital_space` VALUES ('471', '楼层一', '2', '1', null, '0', null, null, 'admin', '2019-08-23 17:45:05', '', null);
INSERT INTO `hospital_space` VALUES ('472', '门诊楼', '1', '2', null, '0', null, null, 'admin', '2019-08-26 14:10:29', 'admin', '2019-08-26 14:11:35');
INSERT INTO `hospital_space` VALUES ('473', '楼层一', '472', '1', null, '0', null, null, 'admin', '2019-08-26 14:12:27', '', null);
INSERT INTO `hospital_space` VALUES ('474', '楼层二', '472', '2', null, '0', null, null, 'admin', '2019-08-26 14:12:44', '', null);
INSERT INTO `hospital_space` VALUES ('475', '楼层三', '472', '3', null, '0', null, null, 'admin', '2019-08-26 14:13:02', '', null);
INSERT INTO `hospital_space` VALUES ('476', '楼层二', '2', '2', null, '0', null, null, 'admin', '2019-08-26 14:13:56', '', null);
INSERT INTO `hospital_space` VALUES ('477', '楼层四', '472', '4', null, '0', null, null, 'admin', '2019-08-26 14:49:19', '', null);
INSERT INTO `hospital_space` VALUES ('478', '楼层五', '472', '5', null, '0', null, null, 'admin', '2019-08-26 14:49:36', '', null);
INSERT INTO `hospital_space` VALUES ('479', '楼层三', '2', '3', null, '0', null, null, 'admin', '2019-08-27 09:14:03', '', null);

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `LEVEL_` int(11) DEFAULT NULL,
  `NAME` varchar(64) DEFAULT NULL,
  `PARENTID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=612 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of organization
-- ----------------------------
INSERT INTO `organization` VALUES ('1', '0', '帅帅集团有限公司', '-1');
INSERT INTO `organization` VALUES ('602', '2', '销售部', '1');
INSERT INTO `organization` VALUES ('603', '2', '产品部', '1');
INSERT INTO `organization` VALUES ('611', '2', '研发部', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1851', '张三');
INSERT INTO `user` VALUES ('1852', '李四');
INSERT INTO `user` VALUES ('1854', '李小萌');
