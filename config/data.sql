-- Category
INSERT INTO `category` (`name`, `description`) VALUES ('Tools', 'Construction and home renovation tools');
INSERT INTO `category` (`name`, `description`) VALUES ('Garden', 'Garden tools for growing, harvesting, and tending to plants');
INSERT INTO `category` (`name`, `description`) VALUES ('Kitchen', 'Kitchen tools to help make cooking a breeze');

-- Product
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Hammer', 'This is for smashing all the things', 'c96c2eef-28db-4d30-9e48-e4e31c44c89d', 12.95, 1);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Rake', 'Gather all the thomgs', '89188031-5424-4c45-8cde-7adf5fd8163d', 9.95, 2);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Saw', 'Cut so many things', '9a886f23-f562-48e6-bf31-c52f52195e0b', 17.26, 1);