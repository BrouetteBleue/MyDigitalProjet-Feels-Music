CREATE DATABASE `feelsmusic`;

CREATE TABLE `account` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`role`	BOOLEAN NOT NULL,
	`pseudo` VARCHAR(100) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`phone` INT(10) NULL,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`country` VARCHAR(255) NULL,
	`photo` VARCHAR(255) NULL,
	`insta` VARCHAR(255) NULL,
	`open_to_work` BOOLEAN,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `style` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`name` ENUM('Pop', 'Rock', 'Jazz', 'Blues', 'Country', 'Soul', 'R&B', 'Hip-Hop', 'Electro', 'Reggae', 'Métal', 
		'Classique', 		'Disco', 'Funk', 'Rap', 'Afrobeat', 'K-pop') NOT NULL);

CREATE TABLE `category` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`name` ENUM('Hard Rock', 'Soft Rock', 'Punk Rock', 'Bebop', 'Swing', 'Jazz Fusion', 'Delta Blues', 'Chicago Blues',
		'Trap', 'Drill', 'Techno', 'House', 'Dubstep', 'Heavy Métal', 'Death Métal', 'Black Métal', 'Baroque', 'Romantique',
		'Moderne') NOT NULL);
	
CREATE TABLE `production` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`account_id` INTEGER NOT NULL,
	`style_id` INTEGER NOT NULL,
	`category_id` INTEGER NOT NULL,
	`tags` TEXT NULL,
	`title` VARCHAR(255) NOT NULL,
	`sound` VARCHAR(255) NOT NULL,
	`cover` VARCHAR(255) NULL,
	`description` TEXT NULL,
	`likes` INT NULL,
	`views` INT NULL,
	`downloads` INT NULL,
	`bpm` INT NULL,
	`length` VARCHAR(10) NULL,
	`price` DECIMAL(5,2) NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `comment` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`account_id` INTEGER NOT NULL,
	`production_id` INTEGER NOT NULL,
	`message` TEXT NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `chat` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`sender` INTEGER NOT NULL,
	`receiver` INTEGER NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `chat_message` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`chat_id` INTEGER NOT NULL,
	`sender` INTEGER NOT NULL,
	`message` TEXT NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `command` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`account_id` INTEGER NOT NULL,
	`production_id` INTEGER NOT NULL,
	`total`	DECIMAL(10,2) NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `likes` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`account_id` INTEGER NOT NULL,
	`production_id` INTEGER NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `playlists` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`title` VARCHAR(255) NOT NULL,
	`likes` INTEGER NOT NULL,
	`category_id` INTEGER NOT NULL,
	`style_id` INTEGER NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `playlist_songs` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`playlist_id` INTEGER NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());

CREATE TABLE `reports` (`id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	`sender` INTEGER NOT NULL,
	`accused` INTEGER NOT NULL,
	`motif` ENUM('Propos inappropriés', 'Usurpation d\'identité', 'Autres') NOT NULL,
	`description` TEXT NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
	`modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP());


ALTER TABLE `production` ADD FOREIGN KEY(`account_id`) REFERENCES `account`(`id`) ON DELETE CASCADE;
ALTER TABLE `production` ADD FOREIGN KEY(`categorie_id`) REFERENCES `categorie`(`id`) ON DELETE NO ACTION;
ALTER TABLE `production` ADD FOREIGN KEY(`style_id`) REFERENCES `style`(`id`) ON DELETE NO ACTION;

ALTER TABLE `comment` ADD FOREIGN KEY(`account_id`) REFERENCES `account`(`id`) ON DELETE NO ACTION;
ALTER TABLE `comment` ADD FOREIGN KEY(`production_id`) REFERENCES `production`(`id`) ON DELETE NO ACTION;

ALTER TABLE `chat` ADD FOREIGN KEY(`sender`) REFERENCES `account`(`id`) ON DELETE NO ACTION;
ALTER TABLE `chat` ADD FOREIGN KEY(`receiver`) REFERENCES `account`(`id`) ON DELETE NO ACTION;

ALTER TABLE `chat_message` ADD FOREIGN KEY(`chat_id`) REFERENCES `chat`(`id`) ON DELETE NO ACTION;
ALTER TABLE `chat_id` ADD FOREIGN KEY(`sender`) REFERENCES `account`(`id`) ON DELETE NO ACTION;

ALTER TABLE `command` ADD FOREIGN KEY(`account_id`) REFERENCES `account`(`id`) ON DELETE NO ACTION;
ALTER TABLE `command` ADD FOREIGN KEY(`production_id`) REFERENCES `production`(`id`) ON DELETE NO ACTION;

ALTER TABLE `likes` ADD FOREIGN KEY(`account_id`) REFERENCES `account`(`id`) ON DELETE CASCADE;
ALTER TABLE `likes` ADD FOREIGN KEY(`production_id`) REFERENCES `production`(`id`) ON DELETE CASCADE;

ALTER TABLE `playlists` ADD FOREIGN KEY(`style_id`) REFERENCES `style`(`id`) ON DELETE NO ACTION;
ALTER TABLE `playlists` ADD FOREIGN KEY(`categorie_id`) REFERENCES `categorie`(`id`) ON DELETE NO ACTION;

ALTER TABLE `playlist_songs` ADD FOREIGN KEY(`playlist_id`) REFERENCES `playlists`(`id`) ON DELETE NO ACTION;

ALTER TABLE `reports` ADD FOREIGN KEY(`sender`) REFERENCES `account`(`id`) ON DELETE NO ACTION;
ALTER TABLE `reports` ADD FOREIGN KEY(`accused`) REFERENCES `account`(`id`) ON DELETE NO ACTION;

