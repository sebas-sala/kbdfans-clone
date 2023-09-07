"use client";

import Link from "next/link";
import { useSelectedLayoutSegments, useRouter } from "next/navigation";

export default function NavigationPath() {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();

  const handleClick = (segment: string) => {
    if (segment === segments.at(-1)) {
      return;
    }
    const path = segments.slice(0, segments.indexOf(segment) + 1).join("/");
    router.push(`/${path}`);
  };

  return (
    <nav className="container mx-auto mt-3">
      <ul className="flex gap-x-6">
        <Link href="/">Home</Link>
        {segments.map((segment, index) => (
          <span
            className="cursor-pointer"
            onClick={() => handleClick(segment)}
            key={index}
          >
            {segment}
          </span>
        ))}
      </ul>
    </nav>
  );
}
