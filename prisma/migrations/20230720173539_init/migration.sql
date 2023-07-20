-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "keyboardSizesId" INTEGER;

-- CreateTable
CREATE TABLE "KeyboardSizes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "KeyboardSizes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KeyboardSizes_id_key" ON "KeyboardSizes"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_keyboardSizesId_fkey" FOREIGN KEY ("keyboardSizesId") REFERENCES "KeyboardSizes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
