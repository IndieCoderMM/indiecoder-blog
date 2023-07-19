import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flexBetween w-full bg-white dark:bg-dark-gray px-2 pt-1 maxContentWidth">
      <h1 className="font-bold text-xl text-accent-color">
        <Link href="/">indiecoder</Link>
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
