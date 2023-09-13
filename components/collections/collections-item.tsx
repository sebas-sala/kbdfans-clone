import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  productImage: string | null;
};

export default function CollectionItem({ id, name, productImage }: Props) {
  return (
    <li key={id} className="w-full p-2 shadow-md">
      <Link href={`collections/${name}`}>
        {productImage && (
          <Image
            src={productImage}
            width={800}
            height={800}
            className="object-cover w-full h-56"
            alt={name}
          />
        )}
        <p>{name}</p>
      </Link>
    </li>
  );
}
