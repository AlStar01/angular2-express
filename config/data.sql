-- Category
INSERT INTO `category` (`name`, `description`) VALUES ('Tools', 'Construction and home renovation tools');
INSERT INTO `category` (`name`, `description`) VALUES ('Garden', 'Garden tools for growing, harvesting, and tending to plants');
INSERT INTO `category` (`name`, `description`) VALUES ('Kitchen', 'Kitchen tools to help make cooking a breeze');
INSERT INTO `category` (`name`, `description`) VALUES ('Automotive', 'Tools and parts for cars, trucks, and powersports');
INSERT INTO `category` (`name`, `description`) VALUES ('Leisure', 'All the things you need to have the perfect relaxing weekend');

-- Product
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Hammer', 'This is for smashing all the things', 'c96c2eef-28db-4d30-9e48-e4e31c44c89d', 12.95, 1);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Rake', 'Gather all the thomgs', '89188031-5424-4c45-8cde-7adf5fd8163d', 9.95, 2);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Saw', 'Cut so many things', '9a886f23-f562-48e6-bf31-c52f52195e0b', 17.26, 1);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Seat Covers', 'Protect your seats and add that needed dash of style', '70150a74-ca24-4dd3-a97a-68dcd26a5f8a', 110.05, 4);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Digital Thermometer', 'Cook your food to absolute perfection with this digital thermometer', '80c4430d-34b9-4dd6-acb1-9b2b7b896c69', 29.99, 3);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Lawn Chair Set', 'Sturdy, retractable lawn chairs. Set of four (4)', 'd6d49507-54ff-46cb-99ec-e327b21bb8cb', 45.59, 5);
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`) VALUES ('Sand Bags Game', 'You can play this game while holding a beer. Made from sturdy, painted wood.', '3f29c337-8836-4031-bca8-f56434b894ec', 19.99, 5);


-- Tag
INSERT INTO `tag` (`name`) VALUES ('garden');
INSERT INTO `tag` (`name`) VALUES ('home');
INSERT INTO `tag` (`name`) VALUES ('lifehack');
INSERT INTO `tag` (`name`) VALUES ('sharp');
INSERT INTO `tag` (`name`) VALUES ('lightweight');