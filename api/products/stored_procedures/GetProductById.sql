USE `sample`;
DROP procedure IF EXISTS `GetProductById`;

DELIMITER $$
USE `sample`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetProductById`(IN productId BIGINT(20))
BEGIN
	CREATE TEMPORARY TABLE IF NOT EXISTS temp_product AS (
		SELECT DISTINCT
			p.product_id as productId,
			p.name,
			p.description,
			p.model,
			p.price,
			p.featured_image as featuredImage,
			c.category_id as categoryId,
			c.name as categoryName,
			c.description as categoryDescription
		FROM
			product p
		JOIN 
			category c ON c.category_id = p.category_id
		WHERE p.product_id = productId
	);
    
    SELECT
		*,
        (SELECT COUNT(product_id) FROM product WHERE model = temp_product.model) as quantity
	FROM
		temp_product;
END$$

DELIMITER ;