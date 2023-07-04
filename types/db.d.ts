type ProductImages = {
  id: number | string
  productId: number | string
  url: string
}

export type Products = {
  id: number | string
  name: string
  price: number
  categories?: []
  images: ProductImages[]
}
