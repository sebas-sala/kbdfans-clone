import { ReactNode } from "react";

export interface LinkProps {
  href: string;
  text: string;
}

export interface HeroSliderProps {
  img: string;
}

export type CategoryProps = {
  text: string;
  img: string;
};

export type ButtonProps = {
  text: string;
};

export type ProductParams = {
  text: string;
}

export type CategorySectionProps = {
  text: string;
  href: string;
  promise?: Promise<ProductParams[]>;
};
