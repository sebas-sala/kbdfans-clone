"use client";

import { Spinner } from "@chakra-ui/react";
export default function Loading() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="flex justify-center items-center w-full h-40">
        <Spinner size="xl" className="mx-auto" />
      </div>
    </div>
  );
}
