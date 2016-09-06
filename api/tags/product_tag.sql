DROP TABLE IF EXISTS `product_tag`;
CREATE TABLE IF NOT EXISTS `product_tag` (
    `product_id` BIGINT(20) NOT NULL,
    `tag_id` BIGINT(20) NOT NULL,
    PRIMARY KEY (`product_id`, `tag_id`),
    FOREIGN KEY fk_product (`product_id`) REFERENCES `product` (`product_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY fk_tag (`tag_id`) REFERENCES `tag` (`tag_id`) ON UPDATE CASCADE ON DELETE CASCADE
);