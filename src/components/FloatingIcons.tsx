import { List, XCircle } from "@phosphor-icons/react/dist/ssr";

export default function FloatingIcons({
  resetSelectedCategory,
  resetOrder,
}: {
  resetSelectedCategory: () => void;
  resetOrder: () => void;
}) {
  return (
    <div className="fixed flex bottom-4 right-12 z-50 items-center">
      <button onClick={resetOrder}>
        <XCircle size={38} weight="fill" color="#333" alt="Cancel Order" />
      </button>
      <button
        onClick={resetSelectedCategory}
        className="flex w-8 h-8 bg-dark rounded-full items-center justify-center"
      >
        <List size={18} weight="fill" color="#FFF" alt="Show Menu" />
      </button>
    </div>
  );
}
