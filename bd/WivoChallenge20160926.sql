CREATE DATABASE  IF NOT EXISTS `wivo_git_recruiting` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `wivo_git_recruiting`;
-- MySQL dump 10.13  Distrib 5.5.47, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: wivo_git_recruiting
-- ------------------------------------------------------
-- Server version	5.5.47-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `id_favorite` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `followers` int(11) DEFAULT NULL,
  `html_url` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_favorite`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (2,'addyosmani','Addy Osmani','addyosmani@gmail.com',21527,'https://github.com/addyosmani',NULL,'https://avatars.githubusercontent.com/u/110953?v=3'),(3,'paulirish','Paul Irish',NULL,21294,'https://github.com/paulirish',NULL,'https://avatars.githubusercontent.com/u/39191?v=3'),(5,'jeresig','John Resig','jeresig@gmail.com',12676,'https://github.com/jeresig','Brooklyn, NY','https://avatars.githubusercontent.com/u/1615?v=3'),(7,'al3x','Alex Payne','al3x@al3x.net',1031,'https://github.com/al3x','Portland, Oregon, USA','https://avatars.githubusercontent.com/u/152?v=3'),(8,'dchelimsky','','',-1,'https://github.com/dchelimsky','','https://avatars.githubusercontent.com/u/1075?v=3'),(9,'tobi','Tobias Lütke','tobi@shopify.com',601,'https://github.com/tobi','Ottawa, Canada','https://avatars.githubusercontent.com/u/347?v=3'),(10,'tommcfarlin',NULL,'tom@tommcfarlin.com',839,'https://github.com/tommcfarlin','Atlanta, Georgia','https://avatars.githubusercontent.com/u/132166?v=3');
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `id_language` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_language`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'JavaScript'),(2,'Java'),(3,'Python'),(4,'Css'),(5,'C'),(6,'C++'),(7,'C#'),(8,'Haskell'),(9,'Html'),(10,'Shell'),(11,'Objective-C'),(12,'R'),(13,'Vml'),(14,'Go'),(15,'Perl'),(16,'Php'),(17,'CoffeeScript'),(18,'Tex'),(19,'Swift'),(20,'Scala'),(21,'Emacs Lisp'),(22,'Lua'),(23,'Clojure'),(24,'Matlab'),(25,'F#'),(26,' ASP');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-26 21:39:33
