/*
  Warnings:

  - You are about to drop the column `keyboardSizesId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `KeyboardSizes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_keyboardSizesId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "keyboardSizesId";

-- DropTable
DROP TABLE "KeyboardSizes";
