"use client"
import { Spinner as Loader } from "@chakra-ui/react"

const Spinner = () => {
  return (
    <div className='flex justify-center items-center w-full h-40'>
      <Loader size='xl' className='mx-auto' />
    </div>
  )
}

export default Spinner
