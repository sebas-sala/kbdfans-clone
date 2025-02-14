import { CollectionList } from '@/components/collections/collections-list';

import { formatCategoryNumber } from '@/lib/categories-utils';
import { getAllCategoriesWithProductImage } from '@/actions/product-actions';

export default async function CollectionsSection() {
  const categories = await getAllCategoriesWithProductImage();

  const transformedCategories = categories.map((category) => {
    return {
      ...category,
      name: formatCategoryNumber(category.name),
    };
  });

  return (
    <main className='container mx-auto py-10'>
      <CollectionList categories={transformedCategories} />
    </main>
  );
}
