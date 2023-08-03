'use client';

import { SocialLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="w-full maxContentWidth dark:bg-dark-gray mt-8 py-6 dark:text-light-gray text-center border-t border-slate-600">
      <div>
        <h2 className="font-medium text-lg">Connect with Me</h2>
        <ul className="flex items-center justify-center gap-5 p-3">
          {SocialLinks.map((link) => (
            <li className="hover:underline" key={link.name}>
              <a href={link.href} target="_blank">
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 grid gap-1 text-slate-400">
        <p>&copy; 2023 www.indiecoder.tech</p>
        <p>Developed by IndieCoderMM</p>
      </div>
    </footer>
  );
};

export default Footer;
