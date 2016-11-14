USE `sample`;
DROP procedure IF EXISTS `AddTagToProduct`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddTagToProduct`(
	IN productId BIGINT(20), 
    IN tagId BIGINT(20), 
    IN tagName VARCHAR(56))
BEGIN
	DECLARE RecordExists INT DEFAULT 0;
    
    IF (tagId = 0) THEN
		SELECT COUNT(`tag_id`) INTO RecordExists FROM tag WHERE `name` = tagName;
        
        -- Make sure tag does exist based on name
        IF (RecordExists > 0) THEN
			SELECT `tag_id` INTO tagId FROM tag WHERE `name` = tagName;
        ELSE
			INSERT INTO 
				tag (`tag_id`, `name`) 
			VALUES 
				(tagId, tagName);
		   
			SELECT LAST_INSERT_ID() INTO tagId;
        END IF;
    END IF;
    
    INSERT INTO
		product_tag (`product_id`, `tag_id`)
	VALUES
		(productId, tagId);
END$$

DELIMITER ;