import { PrismaClient } from "@prisma/client"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_UR,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const prisma = new PrismaClient()

const users = [
  {
    id: 1,
    email: "sebastian@gmail.com",
    username: "sebastiannss",
    isAdmin: false,
    password: "contrasena",
    cartId: 1,
  },
  {
    id: 2,
    email: "admin@gmail.com",
    username: "admin",
    isAdmin: true,
    password: "admin123",
    cartId: 2,
  },
]

const carts = [
  { id: 1, userId: 1 },
  { id: 2, userId: 2 },
]

const products = [
  { id: 1, name: "TOFU60 2.0", price: 109, cartId: 1 },
  {
    id: 2,
    name: "D60LITE PC VERSION MECHANICAL KEYBOARD KIT",
    price: 99,
    cartId: 1,
  },
  { id: 3, name: "D60LITE X GMK PHARAOH", price: 119, cartId: 2 },
]

const categories = [
  { id: 1, name: "20%" },
  { id: 2, name: "keyboard" },
]

const images = [
  {
    id: 1,
    url: "https://cdn.shopify.com/s/files/1/1473/3902/files/60_70520e8b-41ce-439a-8580-608c062f88d0.jpg?v=1632904267",
    productId: 1,
  },
  {
    id: 2,
    url: "https://kbdfans.com/cdn/shop/products/untitled.929.png?v=1667544507",
    productId: 2,
  },
  {
    id: 3,
    url: "https://cdn.shopify.com/s/files/1/2772/6534/products/D60Lite_7_1800x.jpg?v=1629420788",
    productId: 2,
  },
]

const createData = async () => {
  // 1. Crear usuarios
  const createdUsers = await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  })

  // 2. Crear carritos
  const createdCarts = await prisma.cart.createMany({
    data: carts,
    skipDuplicates: true,
  })

  // 3. Crear productos
  const createdProducts = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  })

  // 4. Crear categorías
  const createdCategories = await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  })

  // 5. Crear imágenes de productos
  const createdImages = await prisma.productImages.createMany({
    data: images,
    skipDuplicates: true,
  })

  // 6. Subir imágenes al almacenamiento de Supabase
  const uploadImages = async () => {
    for (const image of images) {
      const { data, error } = await supabase.storage
        .from("Products")
        .upload(`keyboards/${image.id}.jpg`, image.url)

      if (error) {
        console.error(`Error al subir la imagen ${image.id}:`, error)
      } else {
        console.log(`Imagen ${image.id} subida con éxito.`)
      }
    }
  }

  await uploadImages()

  // ¡Listo!
  console.log("Datos creados y almacenados en Supabase.")

  // Cierra la conexión con Prisma
  await prisma.$disconnect()
}

// Llama a la función para crear los datos
createData()
