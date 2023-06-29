import { useEffect, useState, RefObject } from "react";

export const useScrollFixed = (ref: RefObject<HTMLElement>) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && window.scrollY > ref.current.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isFixed;
};
