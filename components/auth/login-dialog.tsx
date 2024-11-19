"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import LoginForm from "./login-form"
import AuthButton from "./auth-button"
import { useState } from "react"

export default function LoginDialog() {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false)
    }
  }

  const onClick = () => {
    setOpen(true)
  }

  // className="px-8 py-10"

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <AuthButton onClick={onClick}>Login</AuthButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mx-auto text-4xl font-bold">
            <DialogTitle>Login</DialogTitle>
            <DialogDescription className="sr-only">
              Login to your account to access your account settings, view your
              orders, and more.
            </DialogDescription>
          </DialogHeader>

          <LoginForm onClose={onClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}
