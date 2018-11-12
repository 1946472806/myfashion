-- MySQL dump 10.13  Distrib 8.0.12, for Linux (x86_64)
--
-- Host: localhost    Database: mxndb
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_car`
--

DROP TABLE IF EXISTS `app_car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_car` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `title` varchar(30) NOT NULL,
  `html` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_car`
--

LOCK TABLES `app_car` WRITE;
/*!40000 ALTER TABLE `app_car` DISABLE KEYS */;
INSERT INTO `app_car` VALUES (1001,'img/14374759c35e3b8b02d-160x192.jpg','FAYE迷你双肩背包','FAYE迷你双肩背包','Givenchy','FAYE迷你双肩背包',10640.0000,'添加到购物袋','添加到购物袋'),(1002,'img2/h-111482-1.jpg','羊毛混纺  男仕 长袖针织衫','羊毛混纺  男仕 长袖针织衫','Thom Browne 汤姆•布郎','羊毛混纺  男仕 长袖针织衫',3451.0000,'添加到购物袋','添加到购物袋'),(1003,'img2/h-111482-1.jpg','英国Grow Gorgeous 头皮净化磨砂膏190ml','英国Grow Gorgeous 头皮净化磨砂膏190ml','Grow Gorgeous','英国Grow Gorgeous 头皮净化磨砂膏190ml',250.0000,'添加到购物袋','添加到购物袋'),(1004,'img2/17115659c0df5c5db0c-160x192.jpg','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色','MOLSSI','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色',220.0000,'添加到购物袋','添加到购物袋'),(1005,'img2/13541259bb6b0421b5f-160x192.jpg','英国Grow Gorgeous 头发增厚精华液加强版 60ml','英国Grow Gorgeous 头发增厚精华液加强版 60ml','Grow Gorgeous','英国Grow Gorgeous 头发增厚精华液加强版 60ml',360.0000,'添加到购物袋','添加到购物袋'),(1006,'img2/13290059bb651c288bf-160x192.jpg','英国Grow Gorgeous 头发增厚精华液加强版 60ml','英国Grow Gorgeous 头发增厚精华液加强版 60ml','Grow Gorgeous','英国Grow Gorgeous 头发增厚精华液加强版 60ml',260.0000,'添加到购物袋','添加到购物袋'),(1007,'img2/h-130080-1.jpg','GLOV 超纤维 清水卸妆巾 便携装-象牙白','GLOV 超纤维 清水卸妆巾 便携装-象牙白','GLOV 歌蘭芙','GLOV 超纤维 清水卸妆巾 便携装-象牙白',260.0000,'添加到购物袋','添加到购物袋'),(1008,'img2/19192259c4f1bac0a97-160x192.jpg','LOUIS VUITTON x SUPREME 联名腰带','LOUIS VUITTON x SUPREME 联名腰带','Louis Vuitton 路易威登','LOUIS VUITTON x SUPREME 联名腰带',10000.0000,'添加到购物袋','添加到购物袋'),(1009,'img2/h-003030-1.jpg','经典双G帆布牛皮翻盖男士斜挎包','经典双G帆布牛皮翻盖男士斜挎包','Gucci 古驰','经典双G帆布牛皮翻盖男士斜挎包',7200.0000,'添加到购物袋','添加到购物袋'),(1010,'img2/17471459b65ba22798b-160x192.jpg','MAZZZK寐刻99.99%真丝 男女 眼罩 冰敷 香薰','MAZZZK寐刻99.99%真丝 男女 眼罩 冰敷 香薰','Mazzzk 寐刻','MAZZZK寐刻99.99%真丝 男女 眼罩 冰敷 香薰',200.0000,'添加到购物袋','添加到购物袋'),(1011,'img2/h-002578-1.jpg','双G图案Sukey大号圆底包','双G图案Sukey大号圆底包','Gucci 古驰','双G图案Sukey大号圆底包',7480.0000,'添加到购物袋','添加到购物袋'),(1012,'img2/17501759b65c59bf80d-160x192.jpg','99.99%真丝 男女 眼罩 冰敷 香薰 闺蜜','99.99%真丝 男女 眼罩 冰敷 香薰 闺蜜','Mazzzk 寐刻','99.99%真丝 男女 眼罩 冰敷 香薰 闺蜜',200.0000,'添加到购物袋','添加到购物袋'),(1013,'img2/141506594225eaeeea5-160x192.jpg','FAYE迷你双肩背包','FAYE迷你双肩背包','Chloe 蔻依','FAYE迷你双肩背包',10640.0000,'添加到购物袋','添加到购物袋'),(1014,'img2/14434159bf6b1d263e9-160x192.jpg','英国Grow Gorgeous 头皮净化磨砂膏190ml','英国Grow Gorgeous 头皮净化磨砂膏190ml','Grow Gorgeous','英国Grow Gorgeous 头皮净化磨砂膏190ml',250.0000,'添加到购物袋','添加到购物袋'),(1015,'img2/h-111482-1.jpg','羊毛混纺  男仕 长袖针织衫','羊毛混纺  男仕 长袖针织衫','Thom Browne 汤姆•布郎','羊毛混纺  男仕 长袖针织衫',3451.0000,'添加到购物袋','添加到购物袋'),(1016,'img2/17115659c0df5c5db0c-160x192.jpg','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色','MOLSSI','MOLSSI MOLSSI x Flabjacks 联名款三折晴雨伞 黄色',220.0000,'添加到购物袋','添加到购物袋'),(1017,'img2/13541259bb6b0421b5f-160x192.jpg','英国Grow Gorgeous 头发增厚精华液加强版 60ml','英国Grow Gorgeous 头发增厚精华液加强版 60ml','Grow Gorgeous','英国Grow Gorgeous 头发增厚精华液加强版 60ml',360.0000,'添加到购物袋','添加到购物袋'),(1018,'img2/13290059bb651c288bf-160x192.jpg','英国Grow Gorgeous 头发增厚精华液加强版 60ml','英国Grow Gorgeous 头发增厚精华液加强版 60ml','Grow Gorgeous','英国Grow Gorgeous 头发增厚精华液加强版 60ml',260.0000,'添加到购物袋','添加到购物袋'),(1019,'img2/h-130080-1.jpg','GLOV 超纤维 清水卸妆巾 便携装-象牙白','GLOV 超纤维 清水卸妆巾 便携装-象牙白','GLOV 歌蘭芙','GLOV 超纤维 清水卸妆巾 便携装-象牙白',151.0000,'添加到购物袋','添加到购物袋'),(1020,'img2/19192259c4f1bac0a97-160x192.jpg','LOUIS VUITTON x SUPREME 联名腰带','LOUIS VUITTON x SUPREME 联名腰带','Louis Vuitton 路易威登','LOUIS VUITTON x SUPREME 联名腰带',10000.0000,'添加到购物袋','添加到购物袋');
/*!40000 ALTER TABLE `app_car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_details`
--

DROP TABLE IF EXISTS `app_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_details` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `unit` varchar(10) NOT NULL,
  `price_good` decimal(10,4) NOT NULL,
  `title` varchar(30) NOT NULL,
  `html` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_details`
--

LOCK TABLES `app_details` WRITE;
/*!40000 ALTER TABLE `app_details` DISABLE KEYS */;
INSERT INTO `app_details` VALUES (1002,'img2/h-111482-1.jpg','羊毛混纺  男仕 长袖针织衫','羊毛混纺  男仕 长袖针织衫','Thom Browne','汤姆•布郎','￥',3451.0000,'添加到购物袋','添加到购物袋'),(1003,'img2/h-076996-1.jpg','英国头皮净化磨砂膏190ml','英国头皮净化磨砂膏190ml','Grow Gorgeous','Gorgeous','￥',250.0000,'添加到购物袋','添加到购物袋'),(1004,'img2/17115659c0df5c5db0c-160x192.jpg','MOLSSI三折晴雨伞 黄色','MOLSSI联名款三折晴雨伞 黄色','MOLSSI','MOLSSI ','￥',220.0000,'添加到购物袋','添加到购物袋'),(1005,'img2/13541259bb6b0421b5f-160x192.jpg','增厚精华液加强版 60ml','增厚精华液加强版 60ml','Grow Gorgeous','英国','￥',360.0000,'添加到购物袋','添加到购物袋'),(1006,'img2/13290059bb651c288bf-160x192.jpg','增厚精华液加强版 60ml','增厚精华液加强版 60ml','Grow Gorgeous','英国','￥',260.0000,'添加到购物袋','添加到购物袋'),(1007,'img2/h-130080-1.jpg','GLOV 超纤维','GLOV 超纤维','GLOV','歌蘭芙','￥',260.0000,'添加到购物袋','添加到购物袋'),(1008,'img2/19192259c4f1bac0a97-160x192.jpg','联名腰带','联名腰带','Louis Vuitton','路易威登','￥',10000.0000,'添加到购物袋','添加到购物袋'),(1009,'img2/h-003030-1.jpg','经典双G帆布斜挎包','经典双G帆布斜挎包','Gucci','古驰','￥',7200.0000,'添加到购物袋','添加到购物袋'),(1010,'img2/17471459b65ba22798b-160x192.jpg','MAZZZK寐刻','MAZZZK寐刻','Mazzzk 寐刻','MAZZZK寐刻','￥',200.0000,'添加到购物袋','添加到购物袋'),(1011,'img2/h-002578-1.jpg','双G图案Sukey大号圆底包','双G图案Sukey大号圆底包','Gucci','古驰','￥',7480.0000,'添加到购物袋','添加到购物袋'),(1012,'img2/17501759b65c59bf80d-160x192.jpg',' 闺蜜',' 闺蜜','Mazzzk 寐刻',' 闺蜜','￥',200.0000,'添加到购物袋','添加到购物袋'),(1034,'img2/h-123359-1.jpg','聚酯纤维混纺 女士 卫衣','聚酯纤维混纺 女士 卫衣','VERSACE JEANS','范思哲牛仔','￥',1800.0000,'添加到购物袋','添加到购物袋');
/*!40000 ALTER TABLE `app_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_goods`
--

DROP TABLE IF EXISTS `app_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_goods` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `unit` varchar(10) NOT NULL,
  `price_good` decimal(10,4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_goods`
--

LOCK TABLES `app_goods` WRITE;
/*!40000 ALTER TABLE `app_goods` DISABLE KEYS */;
INSERT INTO `app_goods` VALUES (1001,'img/14374759c35e3b8b02d-160x192.jpg','棉 男士 长袖衬衫','棉 男士 长袖衬衫','Givenchy','Givenchy','￥',12000.0000),(1002,'img/14191759c20865d19a9-160x192.jpg','小牛皮 女士 单肩包','小牛皮 女士 单肩包','Saint Laurent','Saint Laurent','￥',13000.0000),(1003,'img/06580459a49ffc9de29-160x192.jpg','牛皮 女士 手提包','牛皮 女士 手提包','Fendi','Fendi','￥',1200.0000),(1004,'img/16544959cb67595f822-160x192.jpg','UPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','UPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','TUPLUS','TUPLUS','￥',12035.0000),(1005,'img/15053459cdf0be309ee-160x192.jpg','棉 男士 户外鞋','棉 男士 户外鞋','Dsquared2','Dsquared2','￥',3890.0000),(1006,'img/10391259cc60d040df6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Gucci','Gucci','￥',10000.0000),(1007,'img/h-047142-1.jpg','丝羊毛 男士 长袖针织/毛衫','丝羊毛 男士 长袖针织/毛衫','Ermenegildo Zegna','Ermenegildo Zegna','￥',4590.0000),(1008,'img/h-059180-1.jpg','全棉 男士 休闲裤','全棉 男士 休闲裤','Gucci','Gucci','￥',10000.0000),(1009,'img/h-088844-1.jpg','男仕 白色全棉 美杜莎印花 短袖T恤','男仕 白色全棉 美杜莎印花 短袖T恤','Versace','Versace','￥',1500.0000),(1010,'img/h-090674-1.jpg','锦纶  男仕 短外衣夹克','锦纶  男仕 短外衣夹克','PAUL&amp;SHARK','PAUL&amp;SHARK','￥',5006.0000),(1011,'img/h-128241-1.jpg','17春夏新款  小牛皮 女士 手提包','17春夏新款  小牛皮 女士 手提包','Dolce&amp;Gabbana','Dolce&amp;Gabbana','￥',5032.0000),(1012,'img/h-076996-1.jpg','男仕 粉条 花卉 全棉 短袖T恤','男仕 粉条 花卉 全棉 短袖T恤','Maurizio Baldassari','Maurizio Baldassari','￥',3406.0000),(1013,'img/h-107908-1.jpg','棉质   男仕  牛仔裤','棉质   男仕  牛仔裤','TOMBOLINI','TOMBOLINI','￥',2400.0000),(1014,'img/h-126519-1.jpg','黑色翻毛皮 男仕 休闲鞋','黑色翻毛皮 男仕 休闲鞋','Prada','Prada','￥',3890.0000),(1015,'img/1741355942564f9389e-160x192.jpg','浅亚麻色LEI系列手提包','浅亚麻色LEI系列手提包','Fendi','Fendi','￥',1300.0000),(1016,'img/15323559bb821360602-160x192.JPG','棉 男士 长袖卫衣','棉 男士 长袖卫衣','Dsquared2','Dsquared2','￥',890.0000),(1017,'img/14054859801a3cba02a-160x192.jpg','深蓝色男士牛仔裤','深蓝色男士牛仔裤','Burberry','Burberry','￥',906.0000),(1018,'img/14565959953e3bb5c43-160x192.JPG','17秋冬新款 全棉 女士 长袖卫衣','17秋冬新款 全棉 女士 长袖卫衣','McQ by Alexander McQueen','McQ by Alexander McQueen','￥',6790.0000),(1019,'img/10014059979c04a76be-160x192.jpg','羊毛 女士 围巾','羊毛 女士 围巾','Burberry','Burberry','￥',390.0000),(1020,'img/14020959a8f7e1ca636-160x192.jpg','天鹅绒 女士 单肩包','天鹅绒 女士 单肩包','Gucci','Gucci','￥',10000.0000),(1021,'img/12253259af78bc70146-160x192.jpg','三角形 皮革 女士 手拿包','三角形 皮革 女士 手拿包','Balenciaga','Balenciaga','￥',8000.0000),(1022,'img/15130759b39483ec591-160x192.jpg','印花长袖毛衣  维珍羊毛 女士 长袖针织/毛衫','印花长袖毛衣  维珍羊毛 女士 长袖针织/毛衫','Moschino','Moschino','￥',3890.0000),(1023,'img/h-122212-1.jpg','皮革 女士 手提包','皮革 女士 手提包','Louis Vuitton','Louis Vuitton','￥',3320.0000),(1024,'img/14564959b78531903f6-160x192.jpg','羊毛 女士 长袖针织/毛衫','羊毛 女士 长袖针织/毛衫','Moschino','Moschino','￥',4590.0000),(1025,'img/14385759b8d2815f865-160x192.jpg','99.99%真丝 男女 眼罩 冰敷 香薰','99.99%真丝 男女 眼罩 冰敷 香薰','Mazzzk','Mazzzk','￥',190.0000),(1026,'img/13075559b8bd2b9cbce-160x192.jpg','99.99%真丝 男女 眼罩 冰敷 香薰','99.99%真丝 男女 眼罩 冰敷 香薰','Mazzzk','Mazzzk','￥',500.0000),(1027,'img/16201759b8ea417a214-160x192.jpg','漆皮 女士 平底鞋','漆皮 女士 平底鞋','Salvatore Ferragamo','Salvatore Ferragamo','￥',12000.0000),(1028,'img/14374759c35e3b8b02d-160x192.jpg','棉 男士 长袖衬衫','棉 男士 长袖衬衫','Givenchy','Givenchy','￥',19000.0000),(1029,'img/14191759c20865d19a9-160x192.jpg','小牛皮 女士 单肩包','小牛皮 女士 单肩包','Saint Laurent','Saint Laurent','￥',12000.0000),(1030,'img/16544959cb67595f822-160x192.jpg','TUPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','TUPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','TUPLUS','TUPLUS','￥',1000.0000),(1031,'img/15053459cdf0be309ee-160x192.jpg','棉 男士 户外鞋','棉 男士 户外鞋','Dsquared2','Dsquared2','￥',3890.0000),(1032,'img/10391259cc60d040df6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Gucci','Gucci','￥',1900.0000),(1033,'img/1007315983d6e3971e6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Fendi','Fendi','￥',19000.0000),(1034,'img/h-123359-1.jpg','聚酯纤维混纺 女士 卫衣','聚酯纤维混纺 女士 卫衣','VERSACE JEANS','VERSACE JEANS','￥',2900.0000);
/*!40000 ALTER TABLE `app_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_goods_g_user`
--

DROP TABLE IF EXISTS `app_goods_g_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_goods_g_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_goods_g_user_goods_id_user_id_103904da_uniq` (`goods_id`,`user_id`),
  KEY `app_goods_g_user_user_id_0da37ba2_fk_app_user_id` (`user_id`),
  CONSTRAINT `app_goods_g_user_goods_id_ec592dbf_fk_app_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `app_goods` (`id`),
  CONSTRAINT `app_goods_g_user_user_id_0da37ba2_fk_app_user_id` FOREIGN KEY (`user_id`) REFERENCES `app_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_goods_g_user`
--

LOCK TABLES `app_goods_g_user` WRITE;
/*!40000 ALTER TABLE `app_goods_g_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_goods_g_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_goodscar`
--

DROP TABLE IF EXISTS `app_goodscar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_goodscar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_goodscar_goods_id_7ce1909c_fk_app_goods_id` (`goods_id`),
  KEY `app_goodscar_user_id_dcacc881_fk_app_user_id` (`user_id`),
  CONSTRAINT `app_goodscar_goods_id_7ce1909c_fk_app_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `app_goods` (`id`),
  CONSTRAINT `app_goodscar_user_id_dcacc881_fk_app_user_id` FOREIGN KEY (`user_id`) REFERENCES `app_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_goodscar`
--

LOCK TABLES `app_goodscar` WRITE;
/*!40000 ALTER TABLE `app_goodscar` DISABLE KEYS */;
INSERT INTO `app_goodscar` VALUES (49,1,1,1003,1),(50,1,1,1005,1);
/*!40000 ALTER TABLE `app_goodscar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_list`
--

DROP TABLE IF EXISTS `app_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_list` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `price_good` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_list`
--

LOCK TABLES `app_list` WRITE;
/*!40000 ALTER TABLE `app_list` DISABLE KEYS */;
INSERT INTO `app_list` VALUES (1031,'img/15053459cdf0be309ee-160x192.jpg','棉 男士 户外鞋','棉 男士 户外鞋','Dsquared2','D二次方','￥3890'),(1032,'img/10391259cc60d040df6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Gucci','古驰','￥1900'),(1033,'img/1007315983d6e3971e6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Fendi','芬迪','￥19000'),(1034,'img/h-123359-1.jpg','聚酯纤维混纺 女士 卫衣','聚酯纤维混纺 女士 卫衣','VERSACE JEANS','范思哲牛仔','￥1800');
/*!40000 ALTER TABLE `app_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_lunbo`
--

DROP TABLE IF EXISTS `app_lunbo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_lunbo` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_lunbo`
--

LOCK TABLES `app_lunbo` WRITE;
/*!40000 ALTER TABLE `app_lunbo` DISABLE KEYS */;
INSERT INTO `app_lunbo` VALUES (101,'img/13233359cdd8d599109.jpg','伦敦潮鞋 新晋街头时尚品牌','伦敦潮鞋 新晋街头时尚品牌'),(102,'img/13241259cdd8fcc3e6d.jpg','穿搭神器 女士牛仔 Diesel、Just Cavalli、J Brand','穿搭神器 女士牛仔 Diesel、Just Cavalli、J Brand');
/*!40000 ALTER TABLE `app_lunbo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_lunbo1`
--

DROP TABLE IF EXISTS `app_lunbo1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_lunbo1` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `div` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_lunbo1`
--

LOCK TABLES `app_lunbo1` WRITE;
/*!40000 ALTER TABLE `app_lunbo1` DISABLE KEYS */;
INSERT INTO `app_lunbo1` VALUES (1001,'img/14374759c35e3b8b02d-160x192.jpg','棉 男士 长袖衬衫','棉 男士 长袖衬衫','Givenchy','纪梵希','已加入收藏'),(1002,'img/14191759c20865d19a9-160x192.jpg','小牛皮 女士 单肩包','小牛皮 女士 单肩包','Saint Laurent','圣罗兰','已加入收藏'),(1003,'img/06580459a49ffc9de29-160x192.jpg','牛皮 女士 手提包','牛皮 女士 手提包','Fendi','芬迪','已加入收藏'),(1004,'img/16544959cb67595f822-160x192.jpg','UPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','UPLUS/途加 全铝镁合金拉杆箱商务 铝框出差行李箱飞机万向轮旅行箱中性款式 20寸登机箱 曜石黑(点绛红内里)','TUPLUS','途加','已加入收藏'),(1005,'img/15053459cdf0be309ee-160x192.jpg','棉 男士 户外鞋','棉 男士 户外鞋','Dsquared2','D二次方','已加入购物袋'),(1006,'img/10391259cc60d040df6-160x192.jpg','牛皮 女士 双肩包','牛皮 女士 双肩包','Gucci','古驰','已加入收藏'),(1007,'img/h-047142-1.jpg','丝羊毛 男士 长袖针织/毛衫','丝羊毛 男士 长袖针织/毛衫','Ermenegildo Zegna','杰尼亚','已加入购物袋'),(1008,'img/h-059180-1.jpg','全棉 男士 休闲裤','全棉 男士 休闲裤','Gucci','古驰','已加入收藏'),(1009,'img/h-088844-1.jpg','男仕 白色全棉 美杜莎印花 短袖T恤','男仕 白色全棉 美杜莎印花 短袖T恤','Versace','范思哲','已加入收藏'),(1010,'img/h-090674-1.jpg','锦纶  男仕 短外衣夹克','锦纶  男仕 短外衣夹克','PAUL&amp;SHARK','保罗与鲨鱼','已被购买'),(1011,'img/h-128241-1.jpg','17春夏新款  小牛皮 女士 手提包','17春夏新款  小牛皮 女士 手提包','Dolce&amp;Gabbana','杜嘉班纳','已被购买'),(1012,'img/h-076996-1.jpg','男仕 粉条 花卉 全棉 短袖T恤','男仕 粉条 花卉 全棉 短袖T恤','Maurizio Baldassari','毛里齐奥·巴达萨里','已被购买'),(1013,'img/h-107908-1.jpg','棉质   男仕  牛仔裤','棉质   男仕  牛仔裤','TOMBOLINI','东博利尼','已加入收藏'),(1014,'img/h-126519-1.jpg','黑色翻毛皮 男仕 休闲鞋','黑色翻毛皮 男仕 休闲鞋','Prada','普拉达','已加入购物袋'),(1015,'img/1741355942564f9389e-160x192.jpg','浅亚麻色LEI系列手提包','浅亚麻色LEI系列手提包','Fendi','芬迪','已加入收藏'),(1016,'img/15323559bb821360602-160x192.JPG','棉 男士 长袖卫衣','棉 男士 长袖卫衣','Dsquared2','D二次方','已加入购物袋'),(1017,'img/14054859801a3cba02a-160x192.jpg','深蓝色男士牛仔裤','深蓝色男士牛仔裤','Burberry','博柏利','已被购买'),(1018,'img/14565959953e3bb5c43-160x192.JPG','17秋冬新款 全棉 女士 长袖卫衣','17秋冬新款 全棉 女士 长袖卫衣','McQ by Alexander McQueen','麦蔻','已加入购物袋'),(1019,'img/10014059979c04a76be-160x192.jpg','羊毛 女士 围巾','羊毛 女士 围巾','Burberry','博柏利','已加入购物袋'),(1020,'img/14020959a8f7e1ca636-160x192.jpg','天鹅绒 女士 单肩包','天鹅绒 女士 单肩包','Gucci','古驰','已加入收藏'),(1021,'img/12253259af78bc70146-160x192.jpg','三角形 皮革 女士 手拿包','三角形 皮革 女士 手拿包','Balenciaga','巴黎世家','已加入收藏'),(1022,'img/15130759b39483ec591-160x192.jpg','印花长袖毛衣  维珍羊毛 女士 长袖针织/毛衫','印花长袖毛衣  维珍羊毛 女士 长袖针织/毛衫','Moschino','莫斯奇诺','已加入购物袋'),(1023,'img/h-122212-1.jpg','皮革 女士 手提包','皮革 女士 手提包','Louis Vuitton','路易威登','已加入购物袋'),(1024,'img/14564959b78531903f6-160x192.jpg','羊毛 女士 长袖针织/毛衫','羊毛 女士 长袖针织/毛衫','Moschino','莫斯奇诺','已加入购物袋'),(1025,'img/14385759b8d2815f865-160x192.jpg','99.99%真丝 男女 眼罩 冰敷 香薰','99.99%真丝 男女 眼罩 冰敷 香薰','Mazzzk','寐刻','已加入购物袋'),(1026,'img/13075559b8bd2b9cbce-160x192.jpg','99.99%真丝 男女 眼罩 冰敷 香薰','99.99%真丝 男女 眼罩 冰敷 香薰','Mazzzk','寐刻','已加入收藏');
/*!40000 ALTER TABLE `app_lunbo1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_one`
--

DROP TABLE IF EXISTS `app_one`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_one` (
  `id` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `wen` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `said1` varchar(50) NOT NULL,
  `said2` varchar(50) NOT NULL,
  `unit` varchar(10) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `title` varchar(30) NOT NULL,
  `html` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_one`
--

LOCK TABLES `app_one` WRITE;
/*!40000 ALTER TABLE `app_one` DISABLE KEYS */;
INSERT INTO `app_one` VALUES (10034,'good_img/h-123359-1.jpg','聚酯纤维混纺 女士 卫衣','聚酯纤维混纺 女士 卫衣','VERSACE JEANS','范思哲牛仔','￥',1800.0000,'添加到购物袋','添加到购物袋');
/*!40000 ALTER TABLE `app_one` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_order`
--

DROP TABLE IF EXISTS `app_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ordernum` varchar(256) NOT NULL,
  `createtime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_order_user_id_f25a9fc4_fk_app_user_id` (`user_id`),
  CONSTRAINT `app_order_user_id_f25a9fc4_fk_app_user_id` FOREIGN KEY (`user_id`) REFERENCES `app_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_order`
--

LOCK TABLES `app_order` WRITE;
/*!40000 ALTER TABLE `app_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_orderinfo`
--

DROP TABLE IF EXISTS `app_orderinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_orderinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_orderinfo_goods_id_431f42d3_fk_app_goods_id` (`goods_id`),
  KEY `app_orderinfo_order_id_d2342006_fk_app_order_id` (`order_id`),
  CONSTRAINT `app_orderinfo_goods_id_431f42d3_fk_app_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `app_goods` (`id`),
  CONSTRAINT `app_orderinfo_order_id_d2342006_fk_app_order_id` FOREIGN KEY (`order_id`) REFERENCES `app_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_orderinfo`
--

LOCK TABLES `app_orderinfo` WRITE;
/*!40000 ALTER TABLE `app_orderinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_orderinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_tel` varchar(20) NOT NULL,
  `u_password` varchar(256) NOT NULL,
  `u_isdel` tinyint(1) NOT NULL,
  `u_token` varchar(256) NOT NULL,
  `u_img` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
INSERT INTO `app_user` VALUES (1,'15919913340','48882eebf82b367b540bb30a5160d74dabdcea05ac3c1c0c1a48da51d0c09e9ee9346ff5015b56de8af2d6751fe7ade56e96216767374d20753e087e7e7257f7',0,'e2b05ceb-2726-5858-8edc-fd40ad935325','upfile/15919913340.png'),(2,'15919913341','48882eebf82b367b540bb30a5160d74dabdcea05ac3c1c0c1a48da51d0c09e9ee9346ff5015b56de8af2d6751fe7ade56e96216767374d20753e087e7e7257f7',0,'4409ca2d-b154-5f7a-af65-a9c19d5a8132',''),(3,'15919913342','48882eebf82b367b540bb30a5160d74dabdcea05ac3c1c0c1a48da51d0c09e9ee9346ff5015b56de8af2d6751fe7ade56e96216767374d20753e087e7e7257f7',0,'bf925b9b-c267-56e3-8b4d-9fdd416abb54','upfile/15919913342.png'),(4,'15919913343','48882eebf82b367b540bb30a5160d74dabdcea05ac3c1c0c1a48da51d0c09e9ee9346ff5015b56de8af2d6751fe7ade56e96216767374d20753e087e7e7257f7',0,'e9c1e861-dec7-5efd-9f63-5159593cfbfa','upfile/15919913343.png'),(5,'15919913344','48882eebf82b367b540bb30a5160d74dabdcea05ac3c1c0c1a48da51d0c09e9ee9346ff5015b56de8af2d6751fe7ade56e96216767374d20753e087e7e7257f7',0,'a23d7d68-a3ed-5d42-b798-0af947fafa84','upfile/15919913344.png');
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add car',7,'add_car'),(20,'Can change car',7,'change_car'),(21,'Can delete car',7,'delete_car'),(22,'Can add details',8,'add_details'),(23,'Can change details',8,'change_details'),(24,'Can delete details',8,'delete_details'),(25,'Can add goods',9,'add_goods'),(26,'Can change goods',9,'change_goods'),(27,'Can delete goods',9,'delete_goods'),(28,'Can add goods car',10,'add_goodscar'),(29,'Can change goods car',10,'change_goodscar'),(30,'Can delete goods car',10,'delete_goodscar'),(31,'Can add list',11,'add_list'),(32,'Can change list',11,'change_list'),(33,'Can delete list',11,'delete_list'),(34,'Can add lunbo',12,'add_lunbo'),(35,'Can change lunbo',12,'change_lunbo'),(36,'Can delete lunbo',12,'delete_lunbo'),(37,'Can add lunbo1',13,'add_lunbo1'),(38,'Can change lunbo1',13,'change_lunbo1'),(39,'Can delete lunbo1',13,'delete_lunbo1'),(40,'Can add one',14,'add_one'),(41,'Can change one',14,'change_one'),(42,'Can delete one',14,'delete_one'),(43,'Can add user',15,'add_user'),(44,'Can change user',15,'change_user'),(45,'Can delete user',15,'delete_user'),(46,'Can add orderinfo',16,'add_orderinfo'),(47,'Can change orderinfo',16,'change_orderinfo'),(48,'Can delete orderinfo',16,'delete_orderinfo'),(49,'Can add order',17,'add_order'),(50,'Can change order',17,'change_order'),(51,'Can delete order',17,'delete_order');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'app','car'),(8,'app','details'),(9,'app','goods'),(10,'app','goodscar'),(11,'app','list'),(12,'app','lunbo'),(13,'app','lunbo1'),(14,'app','one'),(17,'app','order'),(16,'app','orderinfo'),(15,'app','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2018-11-09 07:27:24.622929'),(2,'auth','0001_initial','2018-11-09 07:27:27.024841'),(3,'admin','0001_initial','2018-11-09 07:27:27.515071'),(4,'admin','0002_logentry_remove_auto_add','2018-11-09 07:27:27.667346'),(5,'app','0001_initial','2018-11-09 07:27:29.237289'),(6,'contenttypes','0002_remove_content_type_name','2018-11-09 07:27:29.501281'),(7,'auth','0002_alter_permission_name_max_length','2018-11-09 07:27:29.684458'),(8,'auth','0003_alter_user_email_max_length','2018-11-09 07:27:29.905126'),(9,'auth','0004_alter_user_username_opts','2018-11-09 07:27:29.959261'),(10,'auth','0005_alter_user_last_login_null','2018-11-09 07:27:30.133536'),(11,'auth','0006_require_contenttypes_0002','2018-11-09 07:27:30.139862'),(12,'auth','0007_alter_validators_add_error_messages','2018-11-09 07:27:30.166890'),(13,'auth','0008_alter_user_username_max_length','2018-11-09 07:27:30.361963'),(14,'sessions','0001_initial','2018-11-09 07:27:30.458763'),(15,'app','0002_auto_20181109_1534','2018-11-09 07:34:52.119742'),(16,'app','0003_order_orderinfo','2018-11-09 09:19:03.125215');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('v88bcd3wgq2wrmh4m2ljm5unosgkptjb','OGRmOGFkZjE3OTc5NjMzNTRkNzE4OWVjNTQwM2FmZmE0Y2NkM2E1ODp7InVzZXJuYW1lIjoiZTJiMDVjZWItMjcyNi01ODU4LThlZGMtZmQ0MGFkOTM1MzI1In0=','2018-11-26 02:37:03.610767');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-11 22:24:47
