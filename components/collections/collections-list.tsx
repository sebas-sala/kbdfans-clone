import { CollectionItem } from './collections-item';

type Props = {
  categories: {
    productImage: string | null;
    id: number;
    name: string;
  }[];
};

export function CollectionList({ categories }: Props) {
  return (
    <ul className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:gap-4 gap-4'>
      {categories?.map((category) => (
        <CollectionItem {...category} key={category.id} />
      ))}
    </ul>
  );
}
