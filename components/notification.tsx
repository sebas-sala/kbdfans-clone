"use client"

import { toast } from "sonner"
import { useEffect } from "react"

interface INotificationProps {
  message: string
}

export function Notification({ message }: INotificationProps) {
  useEffect(() => {
    if (message) {
      toast.error(message)
    }
  }, [message])

  return null
}
