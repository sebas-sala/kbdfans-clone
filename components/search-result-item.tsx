import Link from "next/link";

type SearchResultListProps = {
  id: number;
  name: string;
};

export default function SearchResultItem({ id, name }: SearchResultListProps) {
  return (
    <li
      key={id}
      className="cursor-pointer hover:bg-white transition duration-200 hover:text-black/90"
    >
      <Link href={`/collections/all/${id}`}>{name}</Link>
    </li>
  );
}
