import { Product } from "@/types/menu";
import { categoryIcons } from "@/utils/categoryIcons";

export const products: Product[] = [
  {
    id: 1,
    name: "Smash",
    category: "Hamburguers",
    price: 8,
    icon: categoryIcons["Hamburguers"],
  },
  {
    id: 2,
    name: "Cheese",
    category: "Hamburguers",
    price: 10,
    icon: categoryIcons["Hamburguers"],
  },
  {
    id: 3,
    name: "Ice Cream",
    category: "Desserts",
    price: 5,
    icon: categoryIcons["Desserts"],
  },
  {
    id: 4,
    name: "Beer",
    category: "Drinks",
    price: 3,
    icon: categoryIcons["Drinks"],
  },
  {
    id: 5,
    name: "Water",
    category: "Drinks",
    price: 1,
    icon: categoryIcons["Drinks"],
  },
  {
    id: 6,
    name: "Potato",
    category: "Sides",
    price: 4,
    icon: categoryIcons["Sides"],
  },
];
