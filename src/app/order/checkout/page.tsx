"use client";

import OrderSummary from "@/components/OrderSummary";
import PayMenu from "@/components/PayMenu";
import { Order, initialOrder } from "@/types/order";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [order, setOrder] = useState<Order>(initialOrder);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = searchParams.get("order");

    if (params) {
      const parsedOrder = JSON.parse(params);
      setOrder(parsedOrder);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-1 justify-between items-center mx-12">
      <OrderSummary order={order} />

      <PayMenu />
    </div>
  );
}
