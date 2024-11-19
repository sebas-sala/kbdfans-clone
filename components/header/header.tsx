"use client";

import Image from "next/image";
import { useRef } from "react";

import Container from "@/components/Container";
import IconNav from "./navigation-icons";
import NavigationSticky from "./navigation-sticky";

import { useScrollFixed } from "@/hooks/use-scroll-fixed";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isSticky = useScrollFixed(headerRef);
  return (
    <>
      <header className="inset-0 relative bg-black w-full" ref={headerRef}>
        <Container>
          <Link
            href="/"
            className="flex items-center justify-between py-6 h-full">
            <Image
              src="/logo.webp"
              width={1000}
              height={1000}
              className="h-full w-40 object-cover"
              priority
              alt="Logo"
            />

            {!isSticky && <IconNav />}
          </Link>
        </Container>
      </header>
      <NavigationSticky isSticky={isSticky} />
    </>
  );
}
