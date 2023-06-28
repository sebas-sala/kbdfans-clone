import CategorySection from "@/components/CategorySection";
import React from "react";

const Categories = () => {
  return (
    <main className="mx-auto container">
      <CategorySection text="New arrival" href=""/>
      <CategorySection text="PBTfans" href=""/>
      <CategorySection text="Keyboard switches" href=""/>
      <CategorySection text="Fully Assembled Keyboard" href=""/>
    </main>
  );
};

export default Categories;
