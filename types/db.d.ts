export type ProductImages = {
  id: number
  productId: number | string
  url: string
}

export type Products = {
  id: number
  name: string
  price: number
  stock: number
  images: ProductImages[]
}

export type Categories = {
  id: number
  name: string
  _count: {
    products: number
  }
}

export type User = {
  id: int
  username: string
  email: string
  password: string
}
