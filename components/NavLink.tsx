import Link from "next/link";
import { LinkProps } from "@/types/types";

const NavLink = ({ href, text }: LinkProps) => {
  return (
    <Link
      href={href}
      className="font-bold tracking-wider py-2 px-4 hover:border-b-4 hover:border-white border-b-4 border-black transition duration-150"
    >
      {text}
    </Link>
  );
};

export default NavLink;
