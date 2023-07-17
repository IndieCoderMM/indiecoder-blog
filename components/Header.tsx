import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed top-0 z-20 flex justify-center w-full bg-white border-b border-slate-200 px-2 py-1">
      <Navbar />
    </header>
  );
};

export default Header;
