import CollectionList from "@/components/collections-list";

import { getAllCategoriesWithProductImage } from "@/actions/product-actions";

export default async function CollectionsSection() {
  const categories = await getAllCategoriesWithProductImage();
  return (
    <main className="container mx-auto py-20">
      <CollectionList categories={categories} />
    </main>
  );
}
