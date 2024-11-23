import Link from "next/link"

type LinkRouterProps = {
  title: string
  href: string
}

export default function LinkRouter({ title, href }: LinkRouterProps) {
  return (
    <Link
      href={`/collections/${href}`}
      className="cursor-pointer truncate py-1 text-gray-300 text-xs transition hover:text-white sm:text-sm md:text-base"
    >
      {title}
    </Link>
  )
}
