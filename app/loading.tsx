"use client";

import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="flex justify-center items-center w-full h-40">
        <Loader2Icon className="w-10 h-10 animate-spin" />
      </div>
    </div>
  );
}
