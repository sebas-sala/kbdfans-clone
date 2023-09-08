import ProductImageItem from "./product-image-item";

import { ProductImages } from "@/types/db";

type Props = {
  images: ProductImages[];
  selectedImageIndex: number;
  handleImage: (index: number) => void;
};

export default function ProductImageList({
  images,
  selectedImageIndex,
  handleImage,
}: Props) {
  return (
    <ul className="flex md:flex-wrap md:snap-none gap-4 snap-x snap-mandatory overflow-x-auto h-96 w-full md:h-40">
      {images.map((image, index) => (
        <ProductImageItem
          key={image.id}
          image={image}
          selectedImageIndex={selectedImageIndex}
          handleImage={handleImage}
          index={index}
        />
      ))}
    </ul>
  );
}
