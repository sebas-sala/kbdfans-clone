import { LinkProps } from "@/types/types";
import Link from "next/link";

const PrimaryLink = ({ text, href }: LinkProps) => {
  return <Link href={href} className="text uppercase z-10 py-2 px-10 bg-blue-400/95 rounded-2xl text-white">{text}</Link>;
};

export default PrimaryLink;
