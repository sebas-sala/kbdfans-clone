import type { navDataType } from "@/types/types"

interface IinstagramPosts {
  src: string
  alt: string
  description: string
  route: string
}

export const instaPostsImages: IinstagramPosts[] = [
  {
    src: "/feed1.jpg",
    alt: "",
    description: "insta feed 1",
    route: "",
  },
  {
    src: "/feed2.jpg",
    alt: "",
    description: "insta feed 2",
    route: "",
  },
  {
    src: "/feed3.jpg",
    alt: "",
    description: "insta feed 3",
    route: "",
  },
  {
    src: "/feed4.jpg",
    alt: "",
    description: "insta feed 4",
    route: "",
  },
  {
    src: "/feed5.jpg",
    alt: "",
    description: "insta feed 5",
    route: "",
  },
  {
    src: "/feed6.jpg",
    alt: "insta feed 6",
    description: "",
    route: "",
  },
]

export const shopData: navDataType[] = [
  {
    href: "keyboard",
    title: "Keyboard",
  },
  {
    href: "keycaps",
    title: "Keycaps",
  },
  {
    href: "switches",
    title: "Switches",
  },
  {
    href: "case",
    title: "Case",
  },
  {
    href: "pcb",
    title: "PCB",
  },
  {
    href: "plate",
    title: "Plate",
  },
]

export const rdyToUseData: navDataType[] = [
  {
    href: "20-keyboards",
    title: "20% Keyboard",
  },
  {
    href: "60-keyboards",
    title: "60% Keyboard",
  },
  {
    href: "65-keyboards",
    title: "65% Keyboard",
  },
  {
    href: "75-keyboards",
    title: "75% Keyboard",
  },
  {
    href: "80-keyboards",
    title: "80% Keyboard",
  },
  {
    href: "95-keyboards",
    title: "95% Keyboard",
  },
  {
    href: "100-keyboards",
    title: "100% Keyboard",
  },
]

export const footerLinks = [
  { name: "--->", href: "/" },
  { name: "AliExpress", href: "https://www.aliexpress.com/" },
  { name: "Shopee Philippines", href: "https://shopee.ph/" },
  { name: "Shopee Singapore", href: "https://shopee.sg/" },
  { name: "Shopee Malaysia", href: "https://shopee.com.my/" },
  { name: "Shopee Thailand", href: "https://shopee.co.th/" },
  { name: "Shopee Indonesia", href: "https://shopee.co.id/" },
  { name: "Wholesale", href: "https://www.example.com/wholesale" },
  { name: "Terms of Service", href: "https://www.example.com/terms" },
  { name: "Privacy policy", href: "https://www.example.com/privacy" },
  { name: "Group Buy Policy", href: "https://www.example.com/group-buy" },
  { name: "Shipping Policy", href: "https://www.example.com/shipping" },
  { name: "Refund policy", href: "https://www.example.com/refund" },
  { name: "Affiliate", href: "https://www.example.com/affiliate" },
  { name: "Return order", href: "https://www.example.com/return" },
  { name: "Discord", href: "https://www.example.com/discord" },
  { name: "/r/KBDfans", href: "https://www.reddit.com/r/KBDfans" },
  { name: "Contact Us", href: "https://www.example.com/contact" },
  { name: "About Us", href: "https://www.example.com/about" },
  { name: "Resources", href: "https://www.example.com/resources" },
  { name: "Gift Card", href: "https://www.example.com/gift-card" },
]
