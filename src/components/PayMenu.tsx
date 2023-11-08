import Image from "next/image";
import Container from "./Container";
import { payment } from "@/mocks/payment";
import Link from "next/link";

export default function PayMenu() {
  return (
    <Container>
      <div className="grid grid-cols-3 grid-flow-row-dense">
        {payment.map((method) => {
          return (
            <Link
              key={method.name}
              className="w-24 h-24 bg-white shadow-md rounded-2xl text-center flex flex-col items-center justify-center mx-2 mb-4"
              href="/order/checkout/finish"
            >
              <Image
                src={`/icon/${method.icon}`}
                alt={method.name}
                width={32}
                height={32}
              />
              <span className="text-sm">{method.name}</span>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
