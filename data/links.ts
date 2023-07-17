import { shopData, rdyToUseData } from "."
import { navDataType } from "@/types/types"

type navLinksType = {
  text: string
  href: string
  data?: navDataType[]
}

export const navlinks: navLinksType[] = [
  {
    text: "Shop",
    href: "/collections/all",
    data: shopData,
  },
  {
    text: "Ready To Use",
    href: "/collections",
    data: rdyToUseData,
  },
]
