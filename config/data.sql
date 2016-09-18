-- Category
INSERT INTO `category` (`name`, `description`) VALUES ('Tools', 'Construction and home renovation tools');
INSERT INTO `category` (`name`, `description`) VALUES ('Garden', 'Garden tools for growing, harvesting, and tending to plants');
INSERT INTO `category` (`name`, `description`) VALUES ('Kitchen', 'Kitchen tools to help make cooking a breeze');
INSERT INTO `category` (`name`, `description`) VALUES ('Automotive', 'Tools and parts for cars, trucks, and powersports');
INSERT INTO `category` (`name`, `description`) VALUES ('Leisure', 'All the things you need to have the perfect relaxing weekend');

-- Product
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Hammer', 'This is for smashing all the things', 'c96c2eef-28db-4d30-9e48-e4e31c44c89d', 12.95, 1, 'https://openclipart.org/image/400px/svg_to_png/73/rejon-Hammer.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Rake', 'Gather all the thomgs', '89188031-5424-4c45-8cde-7adf5fd8163d', 9.95, 2, 'https://openclipart.org/image/400px/svg_to_png/244213/cybercooty-rateau.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Saw', 'Cut so many things', '9a886f23-f562-48e6-bf31-c52f52195e0b', 17.26, 1, 'https://openclipart.org/image/400px/svg_to_png/27070/egore911-saw.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Seat Covers', 'Protect your seats and add that needed dash of style', '70150a74-ca24-4dd3-a97a-68dcd26a5f8a', 110.05, 4, 'https://openclipart.org/image/400px/svg_to_png/109753/racing-seat-icon.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Digital Thermometer', 'Cook your food to absolute perfection with this digital thermometer', '80c4430d-34b9-4dd6-acb1-9b2b7b896c69', 29.99, 3, 'https://openclipart.org/image/400px/svg_to_png/122617/1298656157.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Lawn Chair Set', 'Sturdy, retractable lawn chairs. Set of four (4)', 'd6d49507-54ff-46cb-99ec-e327b21bb8cb', 45.59, 5, 'https://openclipart.org/image/400px/svg_to_png/34321/sedia-in-legno-architett-01.png');
INSERT INTO `product` (`name`, `description`, `model`, `price`, `category_id`, `img_url`) VALUES ('Sand Bags Game', 'You can play this game while holding a beer. Made from sturdy, painted wood.', '3f29c337-8836-4031-bca8-f56434b894ec', 19.99, 5, 'https://placeholdit.imgix.net/~text?txtsize=38&txt=no+image&w=400&h=300&txttrack=0');


-- Tag
INSERT INTO `tag` (`name`) VALUES ('garden');
INSERT INTO `tag` (`name`) VALUES ('home');
INSERT INTO `tag` (`name`) VALUES ('lifehack');
INSERT INTO `tag` (`name`) VALUES ('sharp');
INSERT INTO `tag` (`name`) VALUES ('lightweight');
INSERT INTO `tag` (`name`) VALUES ('cushy');
INSERT INTO `tag` (`name`) VALUES ('accurate');
INSERT INTO `tag` (`name`) VALUES ('comfortable');
INSERT INTO `tag` (`name`) VALUES ('colorful');
INSERT INTO `tag` (`name`) VALUES ('games');
INSERT INTO `tag` (`name`) VALUES ('fun');
INSERT INTO `tag` (`name`) VALUES ('weatherproof');

-- Product Tag
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (1, 3);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (1, 2);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (2, 1);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (2, 5);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (2, 1);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (2, 5);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (3, 1);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (3, 2);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (3, 4);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (4, 6);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (4, 8);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (4, 9);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (5, 3);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (5, 7);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (6, 8);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (6, 9);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (7, 9);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (7, 10);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (7, 12);
INSERT INTO `product_tag` (`product_id`, `tag_id`) VALUES (7, 13);