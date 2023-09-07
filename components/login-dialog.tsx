"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

import Dialog from "./Dialog";
import Button from "./Button";
import Form from "./Form";

import { fetchUserByEmailAndPassword } from "@/services/auth-services";
import { useAuth } from "@/contexts/auth-context";

import type { User } from "@/types/db";

export default function LoginDialog() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { setUserData } = useAuth();

  const handleClick = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const { email, password } = data;
      if (!email || !password) return;

      toast.promise(fetchUserByEmailAndPassword(email, password), {
        loading: "login...",
        success: "login success",
        error: "login failed",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const Trigger = () => {
    return (
      <button className="cursor-pointer transition duration-300 hover:text-gray-400">
        Login
      </button>
    );
  };

  return (
    <Dialog title="Login" trigger={<Trigger />}>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 mb-9">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full py-2 pl-4 outline-blue-500 rounded-lg border"
          />
          {errors.email && "Email is required"}

          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            className="w-full py-2 pl-4 outline-blue-500 rounded-lg border"
            {...register("password", { required: true })}
          />
          <button onClick={handleClick} type="button">
            {show ? "Hide" : "Show"}
          </button>
          {errors.password && "Password is required"}
        </div>

        <Button type="submit">Login</Button>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/account/register" className="text-gray-500 underline">
            Create an Account
          </Link>
          <Link href="/" className="text-gray-500 underline">
            Return To Store
          </Link>
        </div>
      </Form>
    </Dialog>
  );
}