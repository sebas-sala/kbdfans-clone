import CollectionList from "@/components/collections/collections-list";

import { getAllCategoriesWithProductImage } from "@/actions/product-actions";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export default async function CollectionsSection() {
  const categories = await getAllCategoriesWithProductImage();
  return (
    <main className="container mx-auto py-20">
      <CollectionList categories={categories} />
    </main>
  );
}
