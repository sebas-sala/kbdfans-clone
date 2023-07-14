import { useContext } from "react"
import { BsSearch } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { AuthContext } from "@/contexts/AuthContext"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import Cart from "@/components/Cart"
import Dropdown from "@/components/Dropdown"

const IconNav = () => {
  const { logout, userData } = useContext(AuthContext)

  const Trigger = () => {
    return (
      <CgProfile className='cursor-pointer transition duration-200 hover:text-white/90' />
    )
  }

  return (
    <div className='flex gap-5 p-2 text-3xl text-white'>
      <BsSearch className='cursor-pointer transition duration-200 hover:text-white/90' />
      <Dropdown trigger={<Trigger />}>
        {userData ? (
          <button
            className='cursor-pointer transition duration-300 hover:text-gray-400'
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
  )
}

export default IconNav
