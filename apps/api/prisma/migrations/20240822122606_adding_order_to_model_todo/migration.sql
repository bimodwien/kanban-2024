/*
  Warnings:

  - Added the required column `order` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todos` ADD COLUMN `order` ENUM('low', 'medium', 'high') NOT NULL;
