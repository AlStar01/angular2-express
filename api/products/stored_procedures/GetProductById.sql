USE `sample`;
DROP procedure IF EXISTS `GetProductById`;

DELIMITER $$
USE `sample`$$
CREATE PROCEDURE `GetProductById` (IN productId BIGINT(20))
BEGIN
	SELECT DISTINCT
		p.product_id as productId,
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
	WHERE p.product_id = productId;
END$$

DELIMITER ;