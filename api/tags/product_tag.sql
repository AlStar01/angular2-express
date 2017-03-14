DROP TABLE IF EXISTS `Product_Tag`;

CREATE TABLE `Product_Tag` (
    `product_id` integer not null, 
    `tag_id` integer not null, 
    foreign key(`product_id`) references `Product`(`id`), 
    foreign key(`tag_id`) references `Tag`(`id`), 
    primary key (`product_id`, `tag_id`)
);

CREATE UNIQUE INDEX `product_tag_product_id_tag_id_unique` on `Product_Tag` (`product_id`, `tag_id`);