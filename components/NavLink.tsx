import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navDataType } from "@/types/types";

type props = {
  text: string;
  href: string;
  data?: navDataType[];
};

const NavLink = ({ data, text, href }: props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      className='py-4'
    >
      <Link href={href} className='font-bold tracking-wider px-4'>
        {text}
      </Link>
      {show && text !== "Home" && (
        <motion.div
          className='mt-4 pt-1 flex w-56 flex-col absolute z-50 text-sm font-semibold py-4 bg-black px-4 border-b-2 border-white shadow-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          {data?.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className='py-1 hover:text-white text-gray-300 transition'
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavLink;
