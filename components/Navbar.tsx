'use client';

import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const spanVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

const linkVariants = {
  tap: { scale: 1.2 },
};

const Navbar = () => {
  const currentRoute = usePathname();

  const linkStyle =
    'flexCenter w-auto gap-1 px-3 py-1 text-slate-500 dark:text-light-gray hover:text-accent-color hover:dark:text-accent-color';
  const linkIconStyle = 'w-8 h-8';
  const activeIconStyle = linkIconStyle + ' text-accent-color';

  return (
    <nav className="sticky top-0 z-50 w-full maxContentWidth bg-white border-b border-slate-600 dark:bg-dark-gray py-3">
      <ul className="flex justify-around items-center w-full">
        {NavLinks.map((link) => (
          <motion.li
            className={`flex justify-center rounded-full overflow-hidden ${
              currentRoute === link.href &&
              'bg-accent-color-light dark:bg-transparent darkBorder'
            }`}
            key={link.key}
            whileTap="tap"
            variants={linkVariants}
          >
            <Link href={link.href} title={link.text} className={linkStyle}>
              <link.icon
                className={
                  currentRoute === link.href ? activeIconStyle : linkIconStyle
                }
              />

              <motion.span
                className={`font-medium text-accent-color ${
                  currentRoute !== link.href && 'absolute'
                }`}
                animate={currentRoute === link.href ? 'open' : 'closed'}
                variants={spanVariants}
                initial="closed"
              >
                {link.text}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
