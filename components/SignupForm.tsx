"use client"
import { useState } from "react"
import {
  FormControl,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react"
import Link from "next/link"

const SignupForm = () => {
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
      <InputGroup className='mt-4'>
        <Input type='text' placeholder='Username' />
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
        className='mt-8 w-full rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500'
        onClick={handleSubmit}
        type='submit'
      >
        Signup
      </button>
      <div className='mt-6 flex items-center justify-center gap-4'>
        <Link href='/account/register' className='text-gray-500 underline'>
          Create an Account
        </Link>
        <Link href='/' className='text-gray-500 underline'>
          Return To Store
        </Link>
      </div>
    </FormControl>
  )
}

export default SignupForm
