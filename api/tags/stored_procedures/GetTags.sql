USE `sample`;
DROP procedure IF EXISTS `GetTags`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTags`()
BEGIN
	SELECT DISTINCT
		t.tag_id as tagId,
        t.name
	FROM
		tag t;
END$$

DELIMITER ;