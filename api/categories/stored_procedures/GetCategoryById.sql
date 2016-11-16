USE `sample`;
DROP procedure IF EXISTS `GetCategoryById`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCategoryById`(IN categoryId BIGINT(20))
BEGIN
	SELECT DISTINCT
		category_id as categoryId,
        name,
        description,
        created_on as createdOn,
        modified_on as modifiedOn
    FROM 
		category 
    WHERE 
		category_id = categoryId;
END$$

DELIMITER ;