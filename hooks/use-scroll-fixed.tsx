"use client";

import { useEffect, useState, RefObject } from "react";

export const useScrollFixed = (ref: RefObject<HTMLElement>) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) setIsSticky(window.scrollY > ref.current.offsetHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isSticky;
};
