export default function OrderItem({ quantity, name, price }: any) {
  return (
    <div className="flex justify-between items-center text-left">
      <span className="font-bold">{quantity}x</span>
      <span className="w-32">{name}</span>
      <span className="w-8 text-left">€ {price}</span>
    </div>
  );
}
