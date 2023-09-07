"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

import Button from "../Button";
import Form from "../Form";
import Dialog from "../Dialog";

import { createUser } from "@/services/auth-services";

import type { User } from "@/types/db";

export default function SignupDialog() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const { email, username, password } = data;
      if (!email || !username || !password) return;

      toast.promise(createUser(email, username, password), {
        loading: "Creating user...",
        success: "Please check your email to verify your account",
        error: "Error creating user",
      });

      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Dialog
      title="Signup"
      trigger={
        <button className="cursor-pointer transition duration-300 hover:text-gray-400">
          Signup
        </button>
      }
    >
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
            type="text"
            placeholder="Username"
            className="w-full py-2 pl-4 outline-blue-500 rounded-lg border"
            {...register("username", { required: true, maxLength: 20 })}
          />
          {errors.username && "Username is required"}

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
        <Button type="submit">Signup</Button>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/" className="text-gray-500 underline">
            Return To Store
          </Link>
        </div>
      </Form>
    </Dialog>
  );
}
