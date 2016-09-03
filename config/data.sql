-- Category
INSERT INTO `category` (`name`) VALUES ('Tools');
INSERT INTO `category` (`name`) VALUES ('Garden');
INSERT INTO `category` (`name`) VALUES ('Kitchen');

-- Product
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Hammer', 'This is for smashing all the things', 'c96c2eef-28db-4d30-9e48-e4e31c44c89d', 12.95, 1);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Rake', 'Gather all the thomgs', '89188031-5424-4c45-8cde-7adf5fd8163d', 9.95, 2);