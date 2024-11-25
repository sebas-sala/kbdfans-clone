export type Categories = {
  id: number;
  name: string;
  _count: {
    products: number;
  };
};

export type User = {
  id: string;
  password?: string;
  email: string;
  cart: Cart[];
};

export type Cart = {
  id: number;
  userId: string;
  quantity: number;
  productId: number;
};

export type CartWithProducts = Cart & {
  User: User;
  Product: Product;
};

export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  stripe_price_id: string;
  images?: ProductImages[];
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export type Category = {
  id: number;
  name: string;
  _count?: {
    products: number;
  };
};
export type ProductImages = {
  id: number;
  url: string;
  product?: Product;
  productId: number;
};
