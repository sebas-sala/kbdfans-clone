import { CgProfile } from "react-icons/cg";

import Login from "@/components/auth/login-dialog";
import Signup from "@/components/auth/signup-dialog";
import Cart from "@/components/cart/cart-drawer";
import Dropdown from "@/components/Dropdown";
import SearchDialog from "@/components/search/search-dialog";

import { useAuth } from "@/contexts/auth-context";

export default function NavigationIcons() {
  const { logout, userData } = useAuth();

  const Trigger = () => {
    return (
      <CgProfile className="cursor-pointer transition duration-200 hover:text-white/90" />
    );
  };

  return (
    <div className="flex gap-5 p-2 text-3xl text-white items-center">
      <SearchDialog />
      <Dropdown trigger={<Trigger />}>
        {userData ? (
          <button
            className="cursor-pointer transition duration-300 hover:text-gray-400"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )}
      </Dropdown>
      <Cart />
    </div>
  );
}
