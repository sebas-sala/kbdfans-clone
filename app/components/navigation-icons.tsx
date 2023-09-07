import { CgProfile } from "react-icons/cg";

import Login from "@/components/login-dialog";
import Signup from "@/components/signup-dialog";
import Cart from "@/components/cart-drawer";
import Dropdown from "@/components/Dropdown";
import SearchInput from "@/components/search-dialog";

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
      <SearchInput />
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
