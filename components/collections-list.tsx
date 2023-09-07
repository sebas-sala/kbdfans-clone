import CollectionItem from "./collections-item";

type Props = {
  categories: {
    productImage: string | null;
    id: number;
    name: string;
  }[];
};

export default function CollectionList({ categories }: Props) {
  return (
    <ul className="flex flex-wrap md:gap-4 md:gap-y-14 justify-center">
      {categories?.map((category) => (
        <CollectionItem {...category} key={category.id} />
      ))}
    </ul>
  );
}
