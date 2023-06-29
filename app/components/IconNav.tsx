import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const IconNav = () => {
  return (
    <div className="flex gap-5 text-white text-3xl p-4">
      <BsSearch className="cursor-pointer hover:text-white/90 transition duration-200" />
      <CgProfile className="cursor-pointer hover:text-white/90 transition duration-200" />
      <AiOutlineShoppingCart className="cursor-pointer hover:text-white/90 transition duration-200" />
    </div>
  );
};

export default IconNav;
