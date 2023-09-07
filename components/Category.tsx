import Image from "next/image";
import PrimaryLink from "./primary-link";

type CategoryProps = {
  text: string;
  img: string;
  link: string;
};

export default function Category({ text, img, link }: CategoryProps) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-12">
      <span className="z-10 text-4xl font-bold text-white">{text}</span>
      <PrimaryLink title="more" href={link} />
      <Image
        src={img}
        fill
        priority
        className="rounded-2xl object-cover"
        sizes="50vw"
        alt={text}
      />
    </div>
  );
}
