USE `sample`;
DROP procedure IF EXISTS `AddTag`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddTag`(
	IN tagName VARCHAR(56),
    OUT tagId BIGINT(20))
BEGIN
	DECLARE RecordExists INT DEFAULT 0;
    
    SELECT DISTINCT COUNT(*) INTO RecordExists FROM tag WHERE `name` = tagName;
    
    IF(RecordExists > 0) THEN
		SELECT `tag_id` INTO tagId FROM tag WHERE `name` = tagName;
    ELSE
		INSERT INTO tag (`name`) VALUES (tagName);
        SELECT LAST_INSERT_ID() INTO tagId;
    END IF;
END$$

DELIMITER ;