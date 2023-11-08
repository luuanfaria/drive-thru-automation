import { Product } from "./menu";

export interface OrderItem {
  product: Product;
  price: number;
  quantity: number;
}

export type Order = {
  items: OrderItem[];
};

export const initialOrder: Order = {
  items: [],
};
