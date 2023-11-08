import Image from "next/image";
import BannerImage from "../../public/image/burguer-banner.jpg";

export default function Banner() {
  return (
    <Image
      className="w-full h-32 object-cover object-left"
      alt="Banner burguer"
      src={BannerImage}
    />
  );
}
