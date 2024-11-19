"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import LoginForm from "./login-form"
import AuthButton from "./auth-button"
import { useState } from "react"

export default function LoginDialog() {
  const [open, setOpen] = useState(false)
  // className="px-8 py-10"

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <AuthButton>Login</AuthButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mx-auto text-4xl font-bold">
            Login
          </DialogHeader>
          <DialogDescription>
            {/* <LoginForm onClose={onClose} /> */}
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
