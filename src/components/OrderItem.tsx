import { Product } from "@/types/menu";

export default function OrderItem({ quantity, product, price }: any) {
  // TODO: Solve this props type
  return (
    <div className="flex justify-between items-center text-left">
      <span className="font-bold">{quantity}x</span>
      <span className="w-32">{product}</span>
      <span className="w-8 text-left">€ {price}</span>
    </div>
  );
}
