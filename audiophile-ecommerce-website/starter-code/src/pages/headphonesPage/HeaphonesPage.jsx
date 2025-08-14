import React from "react";
import ProductPagesLayout from "../../components/productPagesLayout/ProductPagesLayout";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";

function HeaphonesPage() {
  return (
    <ProductPagesLayout>
      <ProductDisplay />
      <ProductDisplay />
    </ProductPagesLayout>
  );
}

export default HeaphonesPage;
