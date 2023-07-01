import Link, { LinkProps } from "next/link";

const ShopnowLink = ({ href }: LinkProps) => {
  return (
    <Link href={href} className='underline text-gray-500'>
      Shop now
    </Link>
  );
};

export default ShopnowLink;
