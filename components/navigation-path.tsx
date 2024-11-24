"use client";

import Link from "next/link";
import { memo } from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function NavigationPath() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="container mx-auto my-3 px-2">
      <Breadcrumb className="flex gap-x-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");

            return (
              <NavigationBreadcrumbItem
                key={index}
                href={href}
                segment={segment}
              />
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}

const NavigationBreadcrumbItem = memo(
  ({ segment, href }: { segment: string; href: string }) => (
    <div className="flex items-center gap-1">
      <BreadcrumbSeparator />
      <BreadcrumbItem className="cursor-pointer">
        <BreadcrumbLink asChild>
          <Link href={href}>{segment}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </div>
  )
);
NavigationBreadcrumbItem.displayName = "NavigationBreadcrumbItem";
