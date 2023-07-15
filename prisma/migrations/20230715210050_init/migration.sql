/*
  Warnings:

  - You are about to drop the `_CartToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `productId` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CartToProduct" DROP CONSTRAINT "_CartToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartToProduct" DROP CONSTRAINT "_CartToProduct_B_fkey";

-- DropIndex
DROP INDEX "Cart_userId_key";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "productId" SET NOT NULL;

-- DropTable
DROP TABLE "_CartToProduct";

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
