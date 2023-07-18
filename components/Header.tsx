import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flexBetween w-full bg-white dark:bg-dark-gray p-2 maxContentWidth">
      <h1 className="font-bold text-xl">IndieCoder Blog</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
