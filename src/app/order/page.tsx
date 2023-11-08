"use client";

import { useState } from "react";

import CategoryMenu from "@/components/CategoryMenu";
import Menu from "@/components/Menu";
import OrderSummary from "@/components/OrderSummary";
import { products } from "@/mocks/products";
import { Order, initialOrder } from "@/types/order";
import Voice from "@/components/Voice";

export default function Order() {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const resetSelectedCategory = () => {
    setSelectedCategory(null);
  };

  const resetOrder = () => {
    setOrder(initialOrder);
  };

  return (
    <div className="flex flex-1 justify-between items-center mx-12">
      <OrderSummary order={order} />
      {selectedCategory ? (
        <CategoryMenu
          category={selectedCategory}
          products={products}
          order={order}
          setOrder={setOrder}
          resetSelectedCategory={resetSelectedCategory}
          resetOrder={resetOrder}
        />
      ) : (
        <Menu handleCategoryClick={handleCategoryClick} />
      )}
    </div>
  );
}
