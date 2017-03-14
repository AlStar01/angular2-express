DROP TABLE IF EXISTS `Tag`;

CREATE TABLE `Tag` (
    `id` integer not null primary key autoincrement, 
    `name` varchar(55) not null, 
    `created_on` datetime default CURRENT_TIMESTAMP, 
    `modified_on` datetime default CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX `tag_name_unique` on `Tag` (`name`);