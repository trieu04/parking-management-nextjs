/*
  Warnings:

  - You are about to drop the column `parkingZoneId` on the `MonthlyTicket` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `zoneCode` on the `ParkingZone` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tiketCode]` on the table `ParkingTicket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[licensePlate]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `parkingLotId` to the `MonthlyTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceList` to the `ParkingLot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherSpace` to the `ParkingZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zoneName` to the `ParkingZone` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `MonthlyTicket` DROP FOREIGN KEY `MonthlyTicket_parkingZoneId_fkey`;

-- DropForeignKey
ALTER TABLE `ParkingLot` DROP FOREIGN KEY `ParkingLot_ownerId_fkey`;

-- AlterTable
ALTER TABLE `MonthlyTicket` DROP COLUMN `parkingZoneId`,
    ADD COLUMN `parkingLotId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ParkingLot` DROP COLUMN `image`,
    DROP COLUMN `ownerId`,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL,
    ADD COLUMN `priceList` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ParkingZone` DROP COLUMN `zoneCode`,
    ADD COLUMN `otherSpace` INTEGER NOT NULL,
    ADD COLUMN `zoneName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Vehicle` MODIFY `type` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ParkingLotManager` (
    `userId` VARCHAR(191) NOT NULL,
    `parkingLotId` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `parkingLotId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ParkingTicket_tiketCode_key` ON `ParkingTicket`(`tiketCode`);

-- CreateIndex
CREATE UNIQUE INDEX `Vehicle_licensePlate_key` ON `Vehicle`(`licensePlate`);

-- AddForeignKey
ALTER TABLE `ParkingLotManager` ADD CONSTRAINT `ParkingLotManager_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParkingLotManager` ADD CONSTRAINT `ParkingLotManager_parkingLotId_fkey` FOREIGN KEY (`parkingLotId`) REFERENCES `ParkingLot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonthlyTicket` ADD CONSTRAINT `MonthlyTicket_parkingLotId_fkey` FOREIGN KEY (`parkingLotId`) REFERENCES `ParkingLot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
