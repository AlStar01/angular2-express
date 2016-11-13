USE `sample`;
DROP procedure IF EXISTS `GetProductsByCategoryId`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetProductsByCategoryId`(IN categoryId BIGINT(20))
BEGIN
	SELECT DISTINCT
		p.product_id,
        p.name,
        p.description,
        p.model,
        p.price,
        p.featured_image as featuredImage,
        c.category_id as categoryId,
        c.name as categoryName,
        c.description as categoryDescription,
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