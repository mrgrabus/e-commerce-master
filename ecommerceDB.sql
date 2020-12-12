-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (3,2),(4,2),(5,4),(6,38);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'men'),(2,'vomen');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `clicked` tinyint(1) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'/assets/women/product1/image1.jpg',1,1),(2,'/assets/women/product1/image2.jpg',0,1),(3,'/assets/women/product1/image3.jpg',0,1),(4,'/assets/women/product1/image4.jpg',0,1),(5,'/assets/women/product1/image5.jpg',0,1),(6,'/assets/women/product2/image1.jpg',1,2),(7,'/assets/women/product2/image2.jpg',0,2),(8,'/assets/women/product2/image3.jpg',0,2),(9,'/assets/women/product2/image4.jpg',0,2),(10,'/assets/women/product2/image5.jpg',0,2),(11,'/assets/women/product3/image1.jpg',1,3),(12,'/assets/women/product3/image2.jpg',0,3),(13,'/assets/women/product3/image3.jpg',0,3),(14,'/assets/women/product3/image4.jpg',0,3),(15,'/assets/women/product3/image5.jpg',0,3),(16,'/assets/women/product4/image1.jpg',1,4),(17,'/assets/women/product4/image2.jpg',0,4),(18,'/assets/women/product4/image3.jpg',0,4),(19,'/assets/women/product4/image4.jpg',0,4),(20,'/assets/women/product4/image5.jpg',0,4),(21,'/assets/women/product5/image1.jpg',1,5),(22,'/assets/women/product5/image2.jpg',0,5),(23,'/assets/women/product5/image3.jpg',0,5),(24,'/assets/women/product5/image4.jpg',0,5),(25,'/assets/women/product5/image5.jpg',0,5),(26,'/assets/women/product6/image1.jpg',1,6),(27,'/assets/women/product6/image2.jpg',0,6),(28,'/assets/women/product6/image3.jpg',0,6),(29,'/assets/women/product6/image4.jpg',0,6),(30,'/assets/women/product6/image5.jpg',0,6),(31,'/assets/women/product7/image1.jpg',1,7),(32,'/assets/women/product7/image2.jpg',0,7),(33,'/assets/women/product7/image3.jpg',0,7),(34,'/assets/women/product7/image4.jpg',0,7),(35,'/assets/women/product7/image5.jpg',0,7),(36,'/assets/women/product8/image1.jpg',1,8),(37,'/assets/women/product8/image2.jpg',0,8),(38,'/assets/women/product8/image3.jpg',0,8),(39,'/assets/women/product8/image4.jpg',0,8),(40,'/assets/women/product8/image5.jpg',0,8),(41,'/assets/women/product9/image1.jpg',1,9),(42,'/assets/women/product9/image2.jpg',0,9),(43,'/assets/women/product9/image3.jpg',0,9),(44,'/assets/women/product9/image4.jpg',0,9),(45,'/assets/women/product9/image5.jpg',0,9),(46,'/assets/women/product10/image1.jpg',1,10),(47,'/assets/women/product10/image2.jpg',0,10),(48,'/assets/women/product10/image3.jpg',0,10),(49,'/assets/women/product10/image4.jpg',0,10),(50,'/assets/women/product10/image5.jpg',0,10),(51,'/assets/women/product11/image1.jpg',1,11),(52,'/assets/women/product11/image2.jpg',0,11),(53,'/assets/women/product11/image3.jpg',0,11),(54,'/assets/women/product11/image4.jpg',0,11),(55,'/assets/women/product11/image5.jpg',0,11),(56,'/assets/women/product12/image1.jpg',1,12),(57,'/assets/women/product12/image2.jpg',0,12),(58,'/assets/women/product12/image3.jpg',0,12),(59,'/assets/women/product12/image4.jpg',0,12),(60,'/assets/women/product12/image5.jpg',0,12),(61,'/assets/men/product1/image1.jpg',1,37),(62,'/assets/men/product1/image2.jpg',0,37),(63,'/assets/men/product1/image3.jpg',0,37),(64,'/assets/men/product1/image4.jpg',0,37),(65,'/assets/men/product1/image5.jpg',0,37),(66,'/assets/men/product2/image1.jpg',1,38),(67,'/assets/men/product2/image2.jpg',0,38),(68,'/assets/men/product2/image3.jpg',0,38),(69,'/assets/men/product2/image4.jpg',0,38),(70,'/assets/men/product2/image5.jpg',0,38),(71,'/assets/men/product3/image1.jpg',1,39),(72,'/assets/men/product3/image2.jpg',0,39),(73,'/assets/men/product3/image3.jpg',0,39),(74,'/assets/men/product3/image4.jpg',0,39),(75,'/assets/men/product3/image5.jpg',0,39),(76,'/assets/men/product4/image1.jpg',1,40),(77,'/assets/men/product4/image2.jpg',0,40),(78,'/assets/men/product4/image3.jpg',0,40),(79,'/assets/men/product4/image4.jpg',0,40),(80,'/assets/men/product4/image5.jpg',0,40),(81,'/assets/men/product5/image1.jpg',1,41),(82,'/assets/men/product5/image2.jpg',0,41),(83,'/assets/men/product5/image3.jpg',0,41),(84,'/assets/men/product5/image4.jpg',0,41),(85,'/assets/men/product5/image5.jpg',0,41),(86,'/assets/men/product6/image1.jpg',1,42),(87,'/assets/men/product6/image2.jpg',0,42),(88,'/assets/men/product6/image3.jpg',0,42),(89,'/assets/men/product6/image4.jpg',0,42),(90,'/assets/men/product6/image5.jpg',0,42),(91,'/assets/men/product7/image1.jpg',1,43),(92,'/assets/men/product7/image2.jpg',0,43),(93,'/assets/men/product7/image3.jpg',0,43),(94,'/assets/men/product7/image4.jpg',0,43),(95,'/assets/men/product7/image5.jpg',0,43),(96,'/assets/men/product8/image1.jpg',1,44),(97,'/assets/men/product8/image2.jpg',0,44),(98,'/assets/men/product8/image3.jpg',0,44),(99,'/assets/men/product8/image4.jpg',0,44),(100,'/assets/men/product8/image5.jpg',0,44),(101,'/assets/men/product9/image1.jpg',1,45),(102,'/assets/men/product9/image2.jpg',0,45),(103,'/assets/men/product9/image3.jpg',0,45),(104,'/assets/men/product9/image4.jpg',0,45),(105,'/assets/men/product9/image5.jpg',0,45),(106,'/assets/men/product10/image1.jpg',1,46),(107,'/assets/men/product10/image2.jpg',0,46),(108,'/assets/men/product10/image3.jpg',0,46),(109,'/assets/men/product10/image4.jpg',0,46),(110,'/assets/men/product10/image5.jpg',0,46),(111,'/assets/men/product11/image1.jpg',1,47),(112,'/assets/men/product11/image2.jpg',0,47),(113,'/assets/men/product11/image3.jpg',0,47),(114,'/assets/men/product11/image4.jpg',0,47),(115,'/assets/men/product11/image5.jpg',0,47),(116,'/assets/men/product12/image1.jpg',1,48),(117,'/assets/men/product12/image2.jpg',0,48),(118,'/assets/men/product12/image3.jpg',0,48),(119,'/assets/men/product12/image4.jpg',0,48),(120,'/assets/men/product12/image5.jpg',0,48);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` text,
  `mainImage` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'RECYCLED POLYESTER PERFORMANCE PARKA',131,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product1/image1.jpg',2),(2,'RECYCLED POLYESTER PERFORMANCE PARKA',231,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product2/image1.jpg',2),(3,'RECYCLED POLYESTER PERFORMANCE PARKA',132,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product3/image1.jpg',2),(4,'RECYCLED POLYESTER PERFORMANCE PARKA',141,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product4/image1.jpg',2),(5,'RECYCLED POLYESTER PERFORMANCE PARKA',431,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product5/image1.jpg',2),(6,'RECYCLED POLYESTER PERFORMANCE PARKA',142,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product6/image1.jpg',2),(7,'RECYCLED POLYESTER PERFORMANCE PARKA',231,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product7/image1.jpg',2),(8,'RECYCLED POLYESTER PERFORMANCE PARKA',151,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product8/image1.jpg',2),(9,'RECYCLED POLYESTER PERFORMANCE PARKA',121,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product9/image1.jpg',2),(10,'RECYCLED POLYESTER PERFORMANCE PARKA',121,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product10/image1.jpg',2),(11,'RECYCLED POLYESTER PERFORMANCE PARKA',141,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product11/image1.jpg',2),(12,'RECYCLED POLYESTER PERFORMANCE PARKA',161,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/women/product12/image1.jpg',2),(37,'RECYCLED POLYESTER PERFORMANCE PARKA',131,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product1/image1.jpg',1),(38,'RECYCLED POLYESTER PERFORMANCE PARKA',231,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product2/image1.jpg',1),(39,'RECYCLED POLYESTER PERFORMANCE PARKA',132,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product3/image1.jpg',1),(40,'RECYCLED POLYESTER PERFORMANCE PARKA',141,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product4/image1.jpg',1),(41,'RECYCLED POLYESTER PERFORMANCE PARKA',431,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product5/image1.jpg',1),(42,'RECYCLED POLYESTER PERFORMANCE PARKA',142,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product6/image1.jpg',1),(43,'RECYCLED POLYESTER PERFORMANCE PARKA',231,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product7/image1.jpg',1),(44,'RECYCLED POLYESTER PERFORMANCE PARKA',151,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product8/image1.jpg',1),(45,'RECYCLED POLYESTER PERFORMANCE PARKA',121,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product9/image1.jpg',1),(46,'RECYCLED POLYESTER PERFORMANCE PARKA',121,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product10/image1.jpg',1),(47,'RECYCLED POLYESTER PERFORMANCE PARKA',141,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product11/image1.jpg',1),(48,'RECYCLED POLYESTER PERFORMANCE PARKA',161,'Crafted from an organic cotton-mulberry silk mix, \nthis oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.','/assets/men/product12/image1.jpg',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-06 15:53:54
