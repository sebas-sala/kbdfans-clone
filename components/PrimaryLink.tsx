import { navDataType } from "@/types/types";
import Link from "next/link";

const PrimaryLink = ({ title, href }: navDataType) => {
  return <Link href={href} className="text uppercase z-10 py-2 px-10 bg-blue-400/95 rounded-2xl text-white">{title}</Link>;
};

export default PrimaryLink;
