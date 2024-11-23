import Link from "next/link"

type SearchResultListProps = {
  id: number
  name: string
  onClick: () => void
}

export default function SearchResultItem({
  id,
  name,
  onClick,
}: SearchResultListProps) {
  return (
    <li key={id} className="w-full" onClick={onClick}>
      <Link
        className="p-2 block w-full cursor-pointer hover:bg-white transition duration-200 hover:text-black/90"
        href={`/collections/all/${id}`}
      >
        {name}
      </Link>
    </li>
  )
}
