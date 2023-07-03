"use client"
import { useState } from "react"
import {
  FormControl,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react"
import ShopnowLink from "./ShopnowLink"

const LoginForm = () => {
  const [show, setShow] = useState(false)
  const handleSubmit = () => {}

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <FormControl className='flex flex-col items-center justify-center'>
      <InputGroup className='mt-4'>
        <Input type='email' placeholder='Email' />
      </InputGroup>

      <InputGroup size='md' className='mt-4'>
        <Input
          pr='4.5rem'
          type={show ? "text" : "password"}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <button
        className='w-full px-4 py-2 rounded-md mt-8 bg-blue-400 text-white hover:bg-blue-500'
        onClick={handleSubmit}
        type='submit'
      >
        Login
      </button>
      <div className='flex justify-center items-center mt-6 gap-4'>
        <ShopnowLink href='/account/register' text='Create an Account' />
        <ShopnowLink href='/' text='Return to Store' />
      </div>
    </FormControl>
  )
}

export default LoginForm
