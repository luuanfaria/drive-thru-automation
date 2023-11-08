import { Order } from "@/types/order";
import { products } from "@/mocks/products";
import { categoryIcons } from "@/utils/categoryIcons";

export const mockOrder: Order = {
  items: [
    {
      product: {
        id: 1,
        name: "Smash",
        category: "Hamburguers",
        price: 8,
        icon: categoryIcons["Hamburguers"],
      },
      price: 8,
      quantity: 1,
    },
  ],
};
