export type Categories = {
  id: number
  name: string
  _count: {
    products: number
  }
}

export type User = {
  id: string
  username: string
  password?: string
  email: string
  cart: Cart[]
}

export type Cart = {
  id: number
  userId: string
  quantity: number
  productId: number
}

export type CartWithProducts = Cart & {
  User: User
  Product: Product
}

export type Product = {
  id: number
  name: string
  price: number
  stock: number
  images: ProductImages[]
}

export type Category = {
  id: number
  name: string
  _count?: {
    products: number
  }
}
export type ProductImages = {
  id: number
  url: string
  product?: Product
  productId: number
}
