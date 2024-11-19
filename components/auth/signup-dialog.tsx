"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import SignupForm from "./signup-form"
import AuthButton from "./auth-button"
import { useState } from "react"

export default function SignupDialog() {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  //className="px-8 py-10"
  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <AuthButton>Signup</AuthButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mx-auto text-4xl font-bold">
            Signup
          </DialogHeader>
          <DialogDescription>
            <SignupForm onClose={onClose} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}
