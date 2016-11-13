USE `sample`;
DROP procedure IF EXISTS `GetTagById`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `GetTagById` (IN tagId BIGINT(20))
BEGIN
	SELECT DISTINCT
		t.tag_id as tagId,
        t.name
	FROM
		tag t
	WHERE
		t.tag_id = tagId;
END$$

DELIMITER ;