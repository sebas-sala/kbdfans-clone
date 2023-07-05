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

const pcb = [
  {
    id: 4,
    name: "DZ60 SOLDERABLE 60% MECHANICAL KEYBOARD PCB",
    price: 38,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 4,
        url: "https://kbdfans.com/cdn/shop/products/9_dc30a2d3-0781-4184-b998-6e5750ae0e71_460x.jpg?v=1645423765",
      },
    ],
  },
  {
    id: 5,
    name: "DZ65 RGB V3 HOT-SWAP RGB PCB",
    price: 58,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 5,
        url: "https://kbdfans.com/cdn/shop/products/DZ65GRBv3PCB1_460x.jpg?v=1622618647",
      },
    ],
  },
  {
    id: 6,
    name: "D60LITE X GMK PHARAOH",
    price: 119,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 6,
        url: "https://kbdfans.com/cdn/shop/products/1_3bb66b8e-451e-411f-abfd-88eb850738c9_460x.jpg?v=1578016278",
      },
    ],
  },
  {
    id: 7,
    name: "DZ60RGB V2 HOT SWAP CUSTOM KEYBOARD PCB",
    price: 55,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 7,
        url: "https://kbdfans.com/cdn/shop/products/DZ60RGBANSI-2000_460x.jpg?v=1627521245",
      },
    ],
  },
  {
    id: 8,
    name: "D60LITE X GMK PHARAOH",
    price: 40,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 8,
        url: "https://kbdfans.com/cdn/shop/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000_460x.jpg?v=1631086544",
      },
    ],
  },
  {
    id: 9,
    name: "DZ60RGB-ANSI V2 HOT SWAP MECHANICAL KEYBOARD PCB",
    price: 55,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 9,
        url: "https://kbdfans.com/cdn/shop/products/DZ60RGBWKL2_460x.jpg?v=1627521072",
      },
    ],
  },
  {
    id: 10,
    name: "KBD67 MARK II RGB V3 HOT-SWAP PCB",
    price: 59,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 10,
        url: "https://kbdfans.com/cdn/shop/products/3_4e435320-d880-4e3d-8f13-914669e325a8_460x.jpg?v=1641451894",
      },
    ],
  },
  {
    id: 11,
    name: "DZ60RGB-WKL HOT-SWAP PCB",
    price: 99,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 11,
        url: "https://kbdfans.com/cdn/shop/products/9_a2f8acaf-80e5-43ae-88a6-a1cc0ba83a14_460x.jpg?v=1641451879",
      },
    ],
  },
]

const keyboards = [
  {
    id: 18,
    name: "READY TO USE KBDPAD MARK II MECHANICAL KEYBOARD WITH PBTFANS TWIST NUMPAD KEYCAPS",
    price: 99.0,
    stock: 10,
    categories: [{ id: 12, name: "pcb" }],
    images: [
      {
        id: 4,
        url: "https://kbdfans.com/cdn/shop/products/9_dc30a2d3-0781-4184-b998-6e5750ae0e71_460x.jpg?v=1645423765",
      },
    ],
  },
  {
    id: 13,
    name: "D60LITE PC VERSION MECHANICAL KEYBOARD KIT",
    price: 99,
    stock: 10,
  },
  {
    id: 14,
    categoryId: 1,
    name: "D60LITE X GMK PHARAOH",
    price: 119,
    stock: 10,
  },
]

const switches = [
  {
    id: 15,
    name: "JERRZI TU LINEAR SWITCHES",
    price: 11,
    stock: 10,
    categories: [{ id: 10, name: "switches" }],
    images: [
      {
        id: 15,
        url: "https://kbdfans.com/cdn/shop/files/1_01a4e28e-8eed-4fda-859f-2e98bb16b8f9_460x.jpg?v=1686721823",
      },
    ],
  },
  {
    id: 16,
    name: "D60LITE PC VERSION MECHANICAL KEYBOARD KIT",
    price: 10.15,
    stock: 10,
    categories: [{ id: 10, name: "switches" }],
    images: [
      {
        id: 16,
        url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
      },
    ],
  },
  {
    id: 17,
    categoryId: 1,
    name: "D60LITE X GMK PHARAOH",
    price: 10.15,
    stock: 10,
    categories: [{ id: 10, name: "switches" }],
    images: [
      {
        id: 17,
        url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
      },
    ],
  },
]

const keycaps = [
  {
    id: 12,
    name: "PBTFANS TAPE & RADIO",
    price: 119,
    stock: 10,
    categories: [{ id: 9, name: "keycaps" }],
    images: [
      {
        id: 12,
        url: "https://kbdfans.com/cdn/shop/files/BASE-B_460x.jpg?v=1688342798",
      },
    ],
  },
  {
    id: 13,
    name: "NP BLUE AND GRAY KEYCAPS",
    price: 15,
    stock: 10,
    categories: [{ id: 9, name: "keycaps" }],
    images: [
      {
        id: 13,
        url: "https://kbdfans.com/cdn/shop/files/np_67f0542d-8bd2-4304-85e4-be63531c9628_460x.jpg?v=1687749887",
      },
    ],
  },
  {
    id: 14,
    categoryId: 1,
    name: "EPBT SPACEBAR KIT COLLECTION",
    price: 19,
    stock: 10,
    imgaes: [
      {
        id: 14,
        url: "https://kbdfans.com/cdn/shop/files/np_67f0542d-8bd2-4304-85e4-be63531c9628_460x.jpg?v=1687749887",
      },
    ],
    categories: [{ id: 9, name: "keycaps" }],
  },
]

const categories = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "20%" },
  { id: 3, name: "60%" },
  { id: 4, name: "65%" },
  { id: 5, name: "75%" },
  { id: 6, name: "80%" },
  { id: 7, name: "95%" },
  { id: 8, name: "100%" },
  { id: 9, name: "keycaps" },
  { id: 10, name: "switches" },
  { id: 11, name: "case" },
  { id: 12, name: "pcb" },
  { id: 13, name: "plate" },
]

const images = [
  {
    id: 4,
    url: "https://kbdfans.com/cdn/shop/products/9_dc30a2d3-0781-4184-b998-6e5750ae0e71_460x.jpg?v=1645423765",
    productId: 4,
  },
  {
    id: 5,
    url: "https://kbdfans.com/cdn/shop/products/DZ65GRBv3PCB1_460x.jpg?v=1622618647",
    productId: 5,
  },
  {
    id: 6,
    url: "https://kbdfans.com/cdn/shop/products/1_3bb66b8e-451e-411f-abfd-88eb850738c9_460x.jpg?v=1578016278",
    productId: 6,
  },
  {
    id: 7,
    url: "https://kbdfans.com/cdn/shop/products/DZ60RGBANSI-2000_460x.jpg?v=1627521245",
    productId: 7,
  },
  {
    id: 8,
    url: "https://kbdfans.com/cdn/shop/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000_460x.jpg?v=1631086544",
    productId: 8,
  },
  {
    id: 9,
    url: "https://kbdfans.com/cdn/shop/products/DZ60RGBWKL2_460x.jpg?v=1627521072",
    productId: 9,
  },
  {
    id: 10,
    url: "https://kbdfans.com/cdn/shop/products/3_4e435320-d880-4e3d-8f13-914669e325a8_460x.jpg?v=1641451894",
    productId: 10,
  },
  {
    id: 11,
    url: "https://kbdfans.com/cdn/shop/products/9_a2f8acaf-80e5-43ae-88a6-a1cc0ba83a14_460x.jpg?v=1641451879",
    productId: 11,
  },
  {
    id: 12,
    url: "https://kbdfans.com/cdn/shop/files/BASE-B_460x.jpg?v=1688342798",
    productId: 12,
  },
  {
    id: 13,
    url: "https://kbdfans.com/cdn/shop/files/np_67fc0542d-8bd2-4304-85e4-be63531c9628_460x.jpg?v=1687749887",
    productId: 13,
  },
  {
    id: 14,
    url: "https://kbdfans.com/cdn/shop/files/np_67f0542d-8bd2-4304-85e4-be63531c9628_460x.jpg?v=1687749887",
    productId: 14,
  },
  {
    id: 15,
    url: "https://kbdfans.com/cdn/shop/files/1_01a4e28e-8eed-4fda-859f-2e98bb16b8f9_460x.jpg?v=1686721823",
    productId: 15,
  },
  {
    id: 16,
    url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
    productId: 16,
  },
  {
    id: 17,
    url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
    productId: 17,
  },
  {
    id: 18,
    url: "https://kbdfans.com/cdn/shop/products/2_61170668-678f-438e-9e4a-3b00c9ca2838_460x.jpg?v=1662531218",
    productId: 18,
  },
  {
    id: 19,
    url: "https://kbdfans.com/cdn/shop/products/2_e8582feb-1ae7-46f5-89c1-e9e10d464a7e_460x.jpg?v=1637821772",
    productId: 19,
  },
  {
    id: 20,
    url: "https://kbdfans.com/cdn/shop/files/2_363912d9-95c5-4947-8f28-f23816c924ec_460x.jpg?v=1688375451",
    productId: 20,
  },
  {
    id: 21,
    url: "https://kbdfans.com/cdn/shop/files/1_adcff244-2a2d-47f8-8feb-c21a5ae10953_460x.jpg?v=1687743660",
    productId: 21,
  },
  {
    id: 22,
    url: "https://kbdfans.com/cdn/shop/files/2_cd0e5253-a21e-4ee7-8ec9-c3f196a40a60_460x.jpg?v=1688359277",
    productId: 22,
  },
  {
    id: 23,
    url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
    productId: 23,
  },
  {
    id: 24,
    url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
    productId: 24,
  },
  {
    id: 25,
    url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
    productId: 25,
  },
  {
    id: 26,
    url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
    productId: 26,
  },
  {
    id: 27,
    url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
    productId: 27,
  },
  {
    id: 28,
    url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
    productId: 28,
  },
  {
    id: 29,
    url: "https://kbdfans.com/cdn/shop/files/1_ef3fe437-391c-483d-8637-ca9e34c9507f_460x.jpg?v=1685781160",
    productId: 29,
  },
  {
    id: 30,
    url: "https://kbdfans.com/cdn/shop/files/1_40f16107-1670-45b2-b32f-c2891f500081_460x.jpg?v=1685940229",
    productId: 30,
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

  // 3. Create keyboard products
  const createdProducts = await prisma.product.createMany({
    data: keyboard,
    skipDuplicates: true,
  })

  // 4. Create PCB products
  const createdPCB = await prisma.product.createMany({
    data: pcb,
    skipDuplicates: true,
  })

  // 5. Create keycaps products
  const createdKeycaps = await prisma.product.createMany({
    data: keycaps,
    skipDuplicates: true,
  })

  // 6. Create switches
  const createdSwitches = await prisma.product.createMany({
    data: switches,
    skipDuplicates: true,
  })

  // 4. create categories
  const createdCategories = await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  })

  // 5. Crear imágenes de productos
  const createdImages = await prisma.productImages.createMany({
    data: images,
    skipDuplicates: true,
  })

  console.log("Datos creados y almacenados en Supabase.")
  await prisma.$disconnect()
}

// Llama a la función para crear los datos
createData()
