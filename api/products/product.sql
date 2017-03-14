DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
	`id` integer not null primary key autoincrement, 
	`name` varchar(55) not null, 
	`description` varchar(255) not null, 
	`price` float not null, 
	`color` varchar(55) not null, 
	`material` varchar(55) not null, 
	`origin` varchar(255) not null, 
	`manufacturer` varchar(255) not null, 
	`featured_image` varchar(255) not null, 
	`created_on` datetime default CURRENT_TIMESTAMP, 
	`modified_on` datetime default CURRENT_TIMESTAMP, 
	"category_id" integer not null,
	foreign key(`category_id`) references `Category`(`id`)
);