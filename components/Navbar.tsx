'use client';

import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentRoute = usePathname();

  console.log(currentRoute);

  const linkIconStyle =
    'flex items-center justify-center rounded-full w-12 h-12  lg:w-14 lg:h-14';
  const activeIconStyle =
    linkIconStyle + ' bg-purple-500 text-white ring ring-purple-100';

  return (
    <nav className="w-full maxContentWidth">
      <ul className="flex justify-center items-center text-2xl lg:text-4xl text-slate-500 w-full">
        {NavLinks.map((link) => (
          <li className="flex-1" key={link.key}>
            <Link href={link.href} className="flex flex-col items-center p-3">
              <span
                className={
                  currentRoute === link.href
                    ? activeIconStyle
                    : linkIconStyle + '  hover:text-purple-500'
                }
              >
                <link.icon />
              </span>
              <span className="text-xs text-slate-500 lg:hidden">
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
