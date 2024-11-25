"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";

import Container from "@/components/Container";
import { NavigationIcons } from "@/components/header/navigation-icons";
import { NavigationSticky } from "@/components/header/navigation-sticky";

import { useScrollFixed } from "@/hooks/use-scroll-fixed";
import { toast } from "sonner";

export function Trigger() {
  return (
    <button
      type="button"
      aria-label="Open dropdown"
      className="flex items-center"
    >
      <CgProfile className="cursor-pointer transition duration-200 hover:text-white/90 h-6 md:h-8" />
    </button>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isSticky = useScrollFixed(headerRef);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }

    window.history.replaceState({}, document.title, window.location.pathname);
  }, []);

  return (
    <>
      <header className="inset-0 relative bg-black w-full" ref={headerRef}>
        <Container className="flex items-center justify-between py-6 h-full">
          <Link href="/">
            <Image
              src="/logo.webp"
              width={1000}
              height={1000}
              className="h-full w-40 object-cover"
              priority
              alt="Logo"
            />
          </Link>
          {!isSticky && <NavigationIcons />}
        </Container>
      </header>
      <NavigationSticky isSticky={isSticky} />
    </>
  );
}
