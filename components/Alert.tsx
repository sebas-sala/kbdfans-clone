"use client";
import {
  Alert as AlertChakra,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

type AlertProps = {
  status: "info" | "warning" | "success" | "error";
  title: string;
  description: string;
};

const Alert = ({ status, title, description }: AlertProps) => {
  return (
    <AlertChakra status={status} className="absolute top-0 z-[70]">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertChakra>
  );
};

export default Alert;
