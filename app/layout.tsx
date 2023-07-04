import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IndieCoder MM',
  description: 'Programming Blog Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="mb-4">
      <nav className="flex items-center justify-between flex-wrap p-1 w-full">
        <div className="flex items-center flex-no-shrink mr-6">
          <a
            className="hover:text-slate-500 text-black hover:no-underline"
            href="#"
          >
            <span className="text-2xl pl-2">Indie Coder</span>
          </a>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 gap-5 items-center">
            <li className="">
              <a className="inline-block hover:underline" href="#">
                About
              </a>
            </li>
            <li className="">
              <a className="inline-block hover:underline" href="#">
                Blog
              </a>
            </li>
            <li className="">
              <a className="inline-block hover:underline" href="#">
                Projects
              </a>
            </li>
            <li className="">
              <a className="inline-block hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
  const footer = (
    <footer>
      <div className="text-center text-slate-400 border-t border-slate-500 mt-6 py-6">
        <h3>Developed by IndieCoder</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
