import React from "react";
import ProductPagesLayout from "../../components/productPagesLayout/ProductPagesLayout";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";

function SpeakersPage() {
  return (
    <ProductPagesLayout title="speakers">
      <ProductDisplay />
      <ProductDisplay />
      <ProductDisplay />
    </ProductPagesLayout>
  );
}

export default SpeakersPage;
