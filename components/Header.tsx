import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flexBetween w-full bg-white px-2 pt-1 dark:bg-dark-gray lg:px-4 lg:py-4 xl:px-16 xl:pt-6">
      <h2 className="text-xl font-bold lowercase text-accent-color lg:text-2xl xl:text-4xl">
        <Link href="/">IndieCoder</Link>
      </h2>
      <ThemeToggle />
    </header>
  );
};

export default Header;
