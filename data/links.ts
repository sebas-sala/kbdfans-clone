import { shopData, rdyToUseData } from "."
import { navDataType } from "@/types/types"

type navLinksType = {
  text: string
  href: string
  data?: navDataType[]
}

export const navlinks: navLinksType[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Shop",
    href: "/all",
    data: shopData,
  },
  {
    text: "Ready To Use",
    href: "/ready-to-use",
    data: rdyToUseData,
  },
]
