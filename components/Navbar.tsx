'use client';

import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex justify-center items-center text-2xl text-slate-500 w-full">
        {NavLinks.map((link) => (
          <li className="flex-1" key={link.key}>
            <Link href={link.href} className="flex flex-col items-center">
              <link.icon />
              <span className="text-sm lg:hidden">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
