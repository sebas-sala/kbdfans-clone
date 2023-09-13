import Link from "next/link";

import NavigationIcons from "./navigation-icons";
import LinkRouter from "../link-router";
import Dropdown from "@/components/Dropdown";

import { navlinks } from "@/data/links";

type StickyNavProps = {
  isSticky: boolean;
};

export default function NavigationSticky({ isSticky }: StickyNavProps) {
  return (
    <div className="sticky top-0 z-50 w-full bg-black">
      <section className="sm:container mx-auto flex justify-between items-center">
        <nav className="z-50 flex w-full items-center gap-4 text-white">
          <Link
            href="/"
            className="p-2 font-bold tracking-wider text-xs sm:text-sm md:text-base"
          >
            Home
          </Link>
          {navlinks.map((links, index) => {
            const { href, data, text } = links;
            const trigger = (
              <Link
                href={href}
                className={`p-2 font-bold tracking-wider text-xs sm:text-sm md:text-base`}
              >
                {text}
              </Link>
            );
            return (
              <Dropdown trigger={trigger} key={index}>
                {data?.map((link, index) => (
                  <LinkRouter key={index} href={link.href} title={link.title} />
                ))}
              </Dropdown>
            );
          })}
        </nav>
        {isSticky && <NavigationIcons />}
      </section>
    </div>
  );
}
