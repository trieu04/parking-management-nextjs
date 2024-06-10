/*
  Warnings:

  - You are about to drop the column `priceList` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `bikeSpace` on the `ParkingZone` table. All the data in the column will be lost.
  - You are about to drop the column `otherSpace` on the `ParkingZone` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `User` table. All the data in the column will be lost.
  - Added the required column `bicycleSpace` to the `ParkingZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motorbikeSpace` to the `ParkingZone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ParkingLot` DROP COLUMN `priceList`,
    ADD COLUMN `bicycleMiniumPrice` DECIMAL(14, 2) NULL,
    ADD COLUMN `bicyclePriceHourly` DECIMAL(14, 2) NULL,
    ADD COLUMN `carMiniumPrice` DECIMAL(14, 2) NULL,
    ADD COLUMN `carPriceHourly` DECIMAL(14, 2) NULL,
    ADD COLUMN `currency` VARCHAR(191) NULL,
    ADD COLUMN `motorbikeMiniumPrice` DECIMAL(14, 2) NULL,
    ADD COLUMN `motorbikePriceHourly` DECIMAL(14, 2) NULL;

-- AlterTable
ALTER TABLE `ParkingZone` DROP COLUMN `bikeSpace`,
    DROP COLUMN `otherSpace`,
    ADD COLUMN `bicycleSpace` INTEGER NOT NULL,
    ADD COLUMN `motorbikeSpace` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `photoUrl`,
    ADD COLUMN `image` VARCHAR(191) NULL;
