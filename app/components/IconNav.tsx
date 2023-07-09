import { BsSearch } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import Cart from "@/components/Cart"
import Dropdown from "@/components/Dropdown"

const IconNav = () => {
  const Trigger = () => {
    return (
      <CgProfile className='cursor-pointer hover:text-white/90 transition duration-200' />
    )
  }

  return (
    <div className='flex gap-5 text-white text-3xl p-2'>
      <BsSearch className='cursor-pointer hover:text-white/90 transition duration-200' />
      <span>
        <Dropdown trigger={<Trigger />}>
          <Login />
          <Signup />
        </Dropdown>
      </span>

      <Cart />
    </div>
  )
}

export default IconNav
