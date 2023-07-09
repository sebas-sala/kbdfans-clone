export type ProductImages = {
  id: number | string
  productId: number | string
  url: string
}

export type Products = {
  id: number | string
  name: string
  price: number
  stock: number
  images: ProductImages[]
}

export type Categories = {
  id: number | string
  name: string
  _count: {
    products: number
  }
}
