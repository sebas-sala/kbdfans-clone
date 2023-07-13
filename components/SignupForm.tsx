"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"
import type { User } from "@/types/db"
import { useRouter } from "next/navigation"
import { createUser } from "@/services/auth"

const SignupForm = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const { username, email, password } = data
      if (!password || !username || !email) return
      const res = await createUser(username, email, password)
      if (res === null) {
        throw new Error("Error creating user")
      }
      router.refresh()
    } catch (e) {
      console.error(e)
    }
  }
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <form
      className='flex flex-col items-center justify-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='space-y-5'>
        <input
          type='email'
          placeholder='Email'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className='w-full py-2 pl-4 outline-blue-500 rounded-lg border'
        />
        {errors.email && "Email is required"}

        <input
          type='text'
          placeholder='Username'
          className='w-full py-2 pl-4 outline-blue-500 rounded-lg border'
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username && "Username is required"}

        <input
          type={show ? "text" : "password"}
          placeholder='Enter password'
          className='w-full py-2 pl-4 outline-blue-500 rounded-lg border'
          {...register("password", { required: true })}
        />
        <button onClick={handleClick} type='button' className='mr-10'>
          {show ? "Hide" : "Show"}
        </button>
        {errors.password && "Password is required"}
      </div>

      <button
        className='mt-8 w-full rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500'
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
    </form>
  )
}

export default SignupForm
