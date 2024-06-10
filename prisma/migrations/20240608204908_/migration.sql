/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ParkingLot` DROP COLUMN `imageUrl`,
    ADD COLUMN `photoUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `image`,
    ADD COLUMN `photoUrl` VARCHAR(191) NULL;
