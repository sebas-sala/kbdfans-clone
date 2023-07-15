"use client"
import { useState, useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"
import type { User } from "@/types/db"
import { useRouter } from "next/navigation"
import { fetchUserByEmailAndPassword } from "@/lib/authFetch"
import { AuthContext } from "@/contexts/AuthContext"
import Button from "./Button"
import Form from "./Form"
import Cookies from "js-cookie"

const LoginForm = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const { setUserData } = useContext(AuthContext)

  const handleClick = () => {
    setShow(!show)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const { email, password } = data
      if (!email || !password) return
      const user = await fetchUserByEmailAndPassword(email, password)
      if (user === null) {
        throw new Error("Invalid email or password")
      }
      Cookies.set("user", JSON.stringify(user), { expires: 1 })
      setUserData(user)
      router.refresh()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-5 mb-9'>
        <input
          type='email'
          placeholder='Email'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className='w-full py-2 pl-4 outline-blue-500 rounded-lg border'
        />
        {errors.email && "Email is required"}

        <input
          type={show ? "text" : "password"}
          placeholder='Enter password'
          className='w-full py-2 pl-4 outline-blue-500 rounded-lg border'
          {...register("password", { required: true })}
        />
        <button onClick={handleClick} type='button'>
          {show ? "Hide" : "Show"}
        </button>
        {errors.password && "Password is required"}
      </div>

      <Button type='submit'>Login</Button>
      <div className='mt-6 flex items-center justify-center gap-4'>
        <Link href='/account/register' className='text-gray-500 underline'>
          Create an Account
        </Link>
        <Link href='/' className='text-gray-500 underline'>
          Return To Store
        </Link>
      </div>
    </Form>
  )
}

export default LoginForm
