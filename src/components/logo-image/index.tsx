import Image from "next/image";
import andrew from "./assets/andrew.png";

export function LogoImage() {
  return <Image src={andrew} alt="andrew" className="h-full w-full" />;
}
