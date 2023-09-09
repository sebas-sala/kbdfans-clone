import { Suspense } from "react";

import Container from "@/components/Container";
import ProductsFetchingSection from "@/components/product/product-section";

import { getProductsByCategoryId } from "@/actions/product-actions";
import ProductLoader from "./Loaders/product-loader";

export default async function Categories() {
  const keyboardsData = getProductsByCategoryId(1, 4);
  const switchesData = getProductsByCategoryId(10, 4);
  const keycapsData = getProductsByCategoryId(9, 4);
  const PCBData = getProductsByCategoryId(12, 8);

  return (
    <Container>
      <Suspense fallback={<ProductLoader />}>
        <ProductsFetchingSection
          title="Fully Assembled Keyboard"
          href="collections/keyboard"
          linkText="Shop"
          promise={keyboardsData}
        />
      </Suspense>
      <Suspense fallback={<ProductLoader />}>
        <ProductsFetchingSection
          title="Keyboard Switches"
          linkText="Shop"
          href="collections/switches"
          promise={switchesData}
        />
      </Suspense>
      <Suspense fallback={<ProductLoader />}>
        <ProductsFetchingSection
          title="Keyboard Keycaps"
          linkText="See more"
          href="collections/keycaps"
          promise={keycapsData}
        />
      </Suspense>
      <Suspense fallback={<ProductLoader />}>
        <ProductsFetchingSection
          title="PCB"
          href="collections/pcb"
          linkText="Shop"
          promise={PCBData}
        />
      </Suspense>
    </Container>
  );
}
