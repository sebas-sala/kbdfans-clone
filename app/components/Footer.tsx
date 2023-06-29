import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="py-10 h-40 border-b border-[#262626]">
            <h4>Subscribe</h4>
            <form>

            </form>
        </div>
        <div className="flex h-40 items-end pb-8">
          <footer className="flex">
            <div className="flex text-white text-xs">
                <Link href={""} className="border-l-2 border-[#262626] px-2">
                    AliExpress
                </Link>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
