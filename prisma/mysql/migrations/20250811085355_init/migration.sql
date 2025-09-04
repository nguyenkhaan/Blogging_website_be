/*
  Warnings:

  - Added the required column `banner` to the `Blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blogs` ADD COLUMN `banner` VARCHAR(191) NOT NULL;
