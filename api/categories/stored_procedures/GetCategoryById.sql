USE `sample`;
DROP procedure IF EXISTS `GetCategoryById`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `GetCategoryById` (IN categoryId BIGINT)
BEGIN
	SELECT *
    FROM category 
    WHERE category_id = categoryId;
END$$

DELIMITER ;