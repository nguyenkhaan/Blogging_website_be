-- CreateTable
CREATE TABLE `Users` (
    `userID` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
