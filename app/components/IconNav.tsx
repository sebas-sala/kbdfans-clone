import { BsSearch } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import Login from "@/components/Login"
import Signup from "@/components/Signup"
import Cart from "@/components/Cart"
import Dropdown from "@/components/Dropdown"

const IconNav = () => {
  const Trigger = () => {
    return (
      <CgProfile className='cursor-pointer transition duration-200 hover:text-white/90' />
    )
  }

  return (
    <div className='flex gap-5 p-2 text-3xl text-white'>
      <BsSearch className='cursor-pointer transition duration-200 hover:text-white/90' />
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
