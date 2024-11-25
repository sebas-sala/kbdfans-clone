import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import Form from "../Form";
import Button from "@/components/Button";
import { Button as ButtonPrimitive } from "../ui/button";

import useAuthContext from "@/hooks/use-auth-context";

import type { User } from "@/types/db";

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
    const { email, password } = data;
    if (!email || !password) return;

    try {
      await handleSignup({ email, password });
      onClose();
      toast.success("Signup successful");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5 mb-9">
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full py-2 pl-4 outline-blue-500 rounded-lg border"
        />
        {errors.email && "Email is required"}

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          autoComplete="new-password"
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
        <ButtonPrimitive variant={"ghost"} onClick={onClose}>
          Return To Store
        </ButtonPrimitive>
      </div>
    </Form>
  );
}
