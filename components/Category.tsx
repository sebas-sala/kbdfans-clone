import { CategoryProps } from "@/types/types";
import Image from "next/image";
import PrimaryLink from "./PrimaryLink";

const Category = ({ text, img }: CategoryProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-12 relative">
      <span className="z-10 text-white text-4xl font-bold">{text}</span>
      <PrimaryLink text="more" href=""/>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={img} fill className="object-cover rounded-2xl" alt={text} />
      </div>
    </div>
  );
};

export default Category;
