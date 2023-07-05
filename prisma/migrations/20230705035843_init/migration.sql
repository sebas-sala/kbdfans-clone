/*
  Warnings:

  - You are about to drop the `_ProductCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductCategory" DROP CONSTRAINT "_ProductCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductCategory" DROP CONSTRAINT "_ProductCategory_B_fkey";

-- DropTable
DROP TABLE "_ProductCategory";

-- CreateTable
CREATE TABLE "product_in_category" (
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_in_category_productId_categoryId_key" ON "product_in_category"("productId", "categoryId");

-- AddForeignKey
ALTER TABLE "product_in_category" ADD CONSTRAINT "product_in_category_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_in_category" ADD CONSTRAINT "product_in_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
