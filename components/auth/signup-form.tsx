import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "../Form";
import Button from "../Button";

import useAuthContext from "@/hooks/use-auth-context";

import { User } from "@/types/db";

type SignupFormProps = {
  onClose: () => void;
};

export default function SignupForm({ onClose }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSignup } = useAuthContext();
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    const { email, password, username } = data;
    if (!email || !password || !username) return;
    handleSignup({ email, password, username });
    onClose();
    router.refresh();
  };

  return (
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
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="w-full py-2 pl-4 outline-blue-500 rounded-lg border"
          {...register("password", { required: true })}
        />
        <button onClick={togglePassword} type="button">
          {showPassword ? "Hide" : "Show"}
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
  );
}
