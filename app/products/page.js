
import MobilityGuide from "@/components/products/MobilityGuide";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";
import ProductHero from "@/components/products/ProductHero";
import React from "react";

export default function page() {
  return (
    <main>
     <ProductHero/>
    <ProductGrid/>
    <MobilityGuide/>
    </main>
  );
}
