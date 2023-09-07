"use client";

import { useRef } from "react";
import Image from "next/image";

import Container from "@/components/Container";
import IconNav from "./navigation-icons";
import NavigationSticky from "./navigation-sticky";

import { useScrollFixed } from "@/hooks/use-scroll-fixed";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isSticky = useScrollFixed(headerRef);
  return (
    <>
      <header className="inset-0 relative bg-black w-full" ref={headerRef}>
        <Container>
          <div className="flex items-center justify-between py-6">
            <Image
              src="/../public/images/logo.avif"
              width={150}
              height={150}
              className="h-auto w-auto object-contain"
              priority
              alt="Logo"
            />
            {!isSticky && <IconNav />}
          </div>
        </Container>
      </header>
      <NavigationSticky isSticky={isSticky} />
    </>
  );
}
