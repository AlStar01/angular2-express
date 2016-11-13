USE `sample`;
DROP procedure IF EXISTS `GetTagsByProductId`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `GetTagsByProductId` (IN productId BIGINT(20))
BEGIN
	SELECT DISTINCT
		t.tag_id as tagId,
        t.name
	FROM
		tag t
	JOIN
		product_tag pt ON pt.tag_id = t.tag_id
	JOIN
		product p ON p.product_id = pt.product_id
	WHERE pt.product_id = productId;
END$$

DELIMITER ;