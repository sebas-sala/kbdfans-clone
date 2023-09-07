import { type Products } from "./db";
import { type CartWithProducts } from "./db";

export type instaPostsImagesType = {
  src: string;
  alt: string;
  description: string;
  route: string;
};

export type ButtonProps = {
  text: string;
};

export type ProductParams = {
  text: string;
};

export type CategorySectionProps = {
  text: string;
  href: string;
  promise?: Promise<ProductParams[]>;
};

export type navDataType = {
  href: string;
  title: string;
  icon?: any;
};

export interface CartHook {
  cartItems: CartWithProducts[];
  setCartItems: (items: Cart[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
}
