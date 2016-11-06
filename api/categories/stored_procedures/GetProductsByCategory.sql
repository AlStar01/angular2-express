USE `sample`;
DROP procedure IF EXISTS `GetProductsByCategory`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetProductsByCategory`(IN categoryId BIGINT(20))
BEGIN
	SELECT DISTINCT
		p.product_id,
        p.name,
        p.description,
        p.model,
        p.price,
        c.category_id as categoryId,
        c.name as categoryName,
        c.description as categoryDescription,
        p.img_url,
        COUNT(p.product_id) as quantity
	FROM
		product p
	JOIN
		category c ON c.category_id = p.category_id
	WHERE
		p.category_id = categoryId
	GROUP BY
		p.model
	ORDER BY 
		quantity DESC;
END$$

DELIMITER ;