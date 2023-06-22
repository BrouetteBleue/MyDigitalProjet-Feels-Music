/*
  Warnings:

  - You are about to drop the column `description` on the `production` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `production` DROP COLUMN `description`,
    MODIFY `likes` INTEGER NULL DEFAULT 0,
    MODIFY `views` INTEGER NULL DEFAULT 0,
    MODIFY `downloads` INTEGER NULL DEFAULT 0;
