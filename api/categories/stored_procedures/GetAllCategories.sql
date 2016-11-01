USE `sample`;
DROP procedure IF EXISTS `GetAllCategories`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `GetAllCategories` ()
BEGIN
	SELECT * FROM category;
END$$

DELIMITER ;