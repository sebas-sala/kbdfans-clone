/*
  Warnings:

  - You are about to drop the `CategoriesOnProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnProducts" DROP CONSTRAINT "CategoriesOnProducts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProducts" DROP CONSTRAINT "CategoriesOnProducts_productId_fkey";

-- DropTable
DROP TABLE "CategoriesOnProducts";

-- CreateTable
CREATE TABLE "_CategoryToProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProducts_AB_unique" ON "_CategoryToProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProducts_B_index" ON "_CategoryToProducts"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToProducts" ADD CONSTRAINT "_CategoryToProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProducts" ADD CONSTRAINT "_CategoryToProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
