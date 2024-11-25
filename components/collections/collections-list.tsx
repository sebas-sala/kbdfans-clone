import { CollectionItem } from "./collections-item";

type Props = {
  categories: {
    productImage: string | null;
    id: number;
    name: string;
  }[];
};

export function CollectionList({ categories }: Props) {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 md:gap-y-14 ">
      {categories?.map((category) => (
        <CollectionItem {...category} key={category.id} />
      ))}
    </ul>
  );
}
