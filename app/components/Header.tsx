import Image from "next/image";
import IconNav from "./IconNav";
import StickyNav from "./StickyNav";

export default function Header() {
  return (
    <header className="bg-black relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <Image
            src="/../public/images/logo.avif"
            width={150}
            height={150}
            className="object-contain w-auto h-auto"
            alt="Logo"
          />
          <IconNav />
        </div>
        <StickyNav />
      </div>
    </header>
  );
}
