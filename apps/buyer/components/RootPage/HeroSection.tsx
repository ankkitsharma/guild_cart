import React from "react";
import { CustomProductCarousel } from "@/components/RootPage/CustomProductCarousel";
import { products } from "@/lib/mockData/products";

export default function RootHeroSection() {
  return (
    <div>
      Root Hero Section
      <div className="ml-15">
        <CustomProductCarousel products={products} />
      </div>
    </div>
  );
}
