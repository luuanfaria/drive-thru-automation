import { category } from "@/mocks/category";
import Container from "./Container";
import Image from "next/image";

type HandleCategoryClick = (categoryName: string) => void;

export default function Menu({
  handleCategoryClick,
}: {
  handleCategoryClick: HandleCategoryClick;
}) {
  return (
    <Container>
      <div className="grid grid-rows-1">
        {category.map((category) => (
          <button
            key={category.name}
            className="flex flex-1 bg-white rounded-xl px-5 py-3 items-center mb-6"
            onClick={() => handleCategoryClick(category.name)}
          >
            <Image
              src={`/icon/${category.icon}`}
              alt={category.name}
              width={32}
              height={32}
            />
            <span className="ml-5 text-xl">{category.name}</span>
          </button>
        ))}
      </div>
    </Container>
  );
}
