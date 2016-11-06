USE `sample`;
DROP procedure IF EXISTS `GetProducts`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetProducts`()
BEGIN
	SELECT DISTINCT
		p.product_id as productId,
        p.name,
        p.description,
        p.model,
        p.price,
        c.category_id as categoryId,
        c.name as categoryName,
        c.description as categoryDescription,
        p.featured_image as featuredImage,
        COUNT(p.product_id) as quantity
	FROM
		product p
	JOIN
		category c ON c.category_id = p.category_id
	GROUP BY
		p.model
	ORDER BY 
		quantity DESC;
END$$

DELIMITER ;

