USE `sample`;
DROP procedure IF EXISTS `GetAllCategories`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCategories`()
BEGIN
	SELECT
		category_id as categoryId,
        name,
        description,
        created_on as createdOn,
        modified_on as modifiedOn
    FROM 
		category;
END$$

DELIMITER ;