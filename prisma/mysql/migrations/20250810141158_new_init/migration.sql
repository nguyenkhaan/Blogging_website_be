-- CreateTable
CREATE TABLE `Blogs` (
    `blogID` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `userID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`blogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TopBlogs` (
    `topBlogID` VARCHAR(191) NOT NULL,
    `blogID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TopBlogs_blogID_key`(`blogID`),
    PRIMARY KEY (`topBlogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TopBlogs` ADD CONSTRAINT `TopBlogs_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blogs`(`blogID`) ON DELETE RESTRICT ON UPDATE CASCADE;
