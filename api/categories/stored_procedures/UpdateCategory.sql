USE `sample`;
DROP procedure IF EXISTS `UpdateCategory`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `UpdateCategory` (
	IN categoryId BIGINT(20),
    IN categoryName VARCHAR(20),
    IN categoryDescription VARCHAR(256))
BEGIN
	UPDATE
		category
	SET 
		`name` = categoryName, 
        `description` = categoryDescription
	WHERE 
		`category_id` = categoryId;
END$$

DELIMITER ;