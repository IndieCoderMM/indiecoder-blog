'use client';

import { SocialLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-gray mt-8 py-6 text-light-gray text-center border-t border-slate-600">
      <div className="">
        <h2 className="font-medium text-lg">Connect with Me</h2>
        <ul className="flex items-center justify-center gap-5 p-3">
          {SocialLinks.map((link) => (
            <li className="hover:underline" key={link.name}>
              <Link href={link.href}>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-[95%] mx-auto border-slate-600" />
      </div>
      <div className="mt-3 grid gap-1 text-slate-400">
        <h2>&copy; 2023 www.indiecoder.tech</h2>
        <h3>Developed by IndieCoderMM</h3>
      </div>
    </footer>
  );
};

export default Footer;
