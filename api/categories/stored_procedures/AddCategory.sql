USE `sample`;
DROP procedure IF EXISTS `AddCategory`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `AddCategory` (
	IN categoryName VARCHAR(50), 
    IN categoryDescription VARCHAR(256),
    OUT categoryId BIGINT(20))
BEGIN
    DECLARE RecordExists INT DEFAULT 0;
    
    SELECT COUNT(*) INTO RecordExists FROM category WHERE name = categoryName;
    
    IF(RecordExists > 0) THEN
		SELECT `category_id` INTO CategoryId FROM `category` WHERE `name` = categoryName;
	ELSE
		INSERT INTO `category`(`name`, `description`) VALUES (categoryName, categoryDescription);
        SELECT LAST_INSERT_ID() INTO categoryId;
	END IF;
END$$

DELIMITER ;