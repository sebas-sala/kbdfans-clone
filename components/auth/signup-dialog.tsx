"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import SignupForm from "./signup-form"
import AuthButton from "./auth-button"
import { useState } from "react"
import { Button } from "../ui/button"
import { DialogDescription } from "@radix-ui/react-dialog"

export default function SignupDialog() {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onClick = () => {
    setOpen(true)
  }

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <AuthButton onClick={onClick}>Signup</AuthButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mx-auto text-4xl font-bold">
            <DialogTitle className="mx-auto text-4xl font-bold">
              Signup
            </DialogTitle>
            <DialogDescription className="sr-only">
              Signup to your account to access your account settings, view your
              orders, and more.
            </DialogDescription>
          </DialogHeader>

          <SignupForm onClose={onClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}
