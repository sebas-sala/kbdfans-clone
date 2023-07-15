export type ProductImages = {
  id: number
  productId: number | string
  url: string
}

export type Product = {
  name: string
  stock: number
  price: number
  images: ProductImages[]
}

export type CartProducts = {
  id: number
  stock: number
  quantity: number
  userId: string
  productId: number
  Product: Product
}
