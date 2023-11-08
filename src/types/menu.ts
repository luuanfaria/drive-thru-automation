export interface Product {
  id: number;
  name: string;
  category: "Hamburguers" | "Drinks" | "Desserts" | "Sides";
  price: number;
  icon: string;
}

export interface Categories {
  name: string;
  icon: string;
}
