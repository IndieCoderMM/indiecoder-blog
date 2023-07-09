'use client';

import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentRoute = usePathname();

  const linkStyle =
    'flex items-center justify-center rounded-full w-auto gap-1 px-5 py-2 text-slate-400 hover:text-primary-blue';
  const activeLinkStyle = linkStyle + ' bg-light-blue';
  const linkIconStyle = 'text-3xl lg:text-4xl';
  const activeIconStyle = linkIconStyle + ' text-primary-blue';

  return (
    <nav className="w-full maxContentWidth">
      <ul className="flex justify-center items-center w-full">
        {NavLinks.map((link) => (
          <li className="flex-1 flex justify-center" key={link.key}>
            <Link
              href={link.href}
              title={link.text}
              className={
                currentRoute === link.href ? activeLinkStyle : linkStyle
              }
            >
              <span
                className={
                  currentRoute === link.href ? activeIconStyle : linkIconStyle
                }
              >
                <link.icon />
              </span>
              <span
                className={
                  currentRoute === link.href
                    ? 'font-medium text-primary-blue'
                    : 'hidden'
                }
              >
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
