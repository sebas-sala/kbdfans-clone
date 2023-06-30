import { useEffect, useState, RefObject } from "react";

export const useScrollFixed = (ref: RefObject<HTMLElement>) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > ref.current!.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isFixed;
};
