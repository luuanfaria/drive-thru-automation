import Link from "next/link";

import Container from "./Container";
import OrderItem from "./OrderItem";

import { Order } from "@/types/order";

export default function OrderSummary({ order }: { order: Order }) {
  function calculateTotal(order: Order) {
    return order.items.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);
  }

  const total = calculateTotal(order);
  return (
    <Container>
      <div className="flex flex-col justify-between h-full">
        <div className="px-4">
          {order.items.length > 0 ? (
            order.items.map((item) => {
              return (
                <OrderItem
                  key={item.product.id}
                  quantity={item.quantity}
                  name={item.product.name}
                  price={item.price}
                />
              );
            })
          ) : (
            <p className="text-center text-dark">
              Your order is currently empty.
            </p>
          )}
        </div>
        {total ? (
          <Link
            href={{
              pathname: "/order/checkout",
              query: { order: JSON.stringify(order) },
            }}
            className="bg-brand flex justify-between items-center rounded-full px-3 py-3"
          >
            <span className="text-white font-bold">Checkout</span>
            <span className="text-white">€ {total}</span>
          </Link>
        ) : (
          <div className="bg-brand flex justify-between items-center rounded-full px-3 py-3">
            <span className="text-white font-bold">Checkout</span>
            <span className="text-white">€ {total}</span>
          </div>
        )}
      </div>
    </Container>
  );
}
