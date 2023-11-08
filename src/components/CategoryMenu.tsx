import Image from "next/image";
import Container from "./Container";

import { Product } from "@/types/menu";
import { Order } from "@/types/order";
import FloatingIcons from "./FloatingIcons";

interface CategoryMenuProps {
  category: string;
  products: Product[];
  order: Order;
  setOrder: (order: Order) => void;
  resetOrder: () => void;
  resetSelectedCategory: () => void;
}

export default function CategoryMenu({
  category,
  products,
  order,
  setOrder,
  resetOrder,
  resetSelectedCategory,
}: CategoryMenuProps) {
  const handleAddToOrder = (product: Product) => {
    const existingItem = order.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      const updateOrder = {
        ...order,
        items: order.items.map((item) =>
          item.product.id === existingItem.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      setOrder(updateOrder);
    } else {
      setOrder({
        items: [
          ...order.items,
          {
            product,
            quantity: 1,
            price: product.price,
          },
        ],
      });
    }
  };
  return (
    <Container>
      <div className="grid grid-cols-3 grid-flow-row-dense">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <button
              key={product.id}
              className="w-24 h-24 bg-white shadow-md rounded-2xl text-center flex flex-col items-center justify-center mx-2 mb-4"
              onClick={() => handleAddToOrder(product)}
            >
              <Image
                src={`/icon/${product.icon}`}
                alt={product.name}
                width={32}
                height={32}
              />
              <span className="text-sm">{product.name}</span>
              <span className="text-sm font-bold">€ {product.price}</span>
            </button>
          ))}
      </div>
      <FloatingIcons
        resetSelectedCategory={resetSelectedCategory}
        resetOrder={resetOrder}
      />
    </Container>
  );
}
