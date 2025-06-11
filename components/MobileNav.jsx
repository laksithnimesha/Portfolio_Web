"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-luke" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Accessible Title (hidden visually, but needed for accessibility) */}
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        </SheetHeader>

        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Laksi<span className="text-luke"> .</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize transition-all hover:text-luke ${
                  isActive ? "text-luke border-b-2 border-luke" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
