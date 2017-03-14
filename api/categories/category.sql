DROP TABLE IF EXISTS `Category`;

CREATE TABLE `Category` (
    `id` integer not null primary key autoincrement, 
    `name` varchar(55) not null, 
    `description` varchar(255) not null, 
    `created_on` datetime default CURRENT_TIMESTAMP, 
    `modified_on` datetime default CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX `category_name_unique` on `Category` (`name`);