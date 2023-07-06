import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
    <header className="mb-4 border-b-2 md:border-none border-slate-100">
      <nav className="flex flex-col md:flex-row items-center justify-between p-1 w-full">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="IndieCoder Logo"
            className="mr-3 h-9 w-auto md:h-15 border rounded-full hover:ring-1"
          />
          <h1 className="font-bold text-xl hover:text-slate-700">IndieCoder</h1>
        </Link>

        <ul className="list-reset flex justify-end gap-5 items-center">
          <li className="flex-1 border-transparent border-b-2 hover:border-b-red-500 hover:text-red-500">
            <Link href="about">About</Link>
          </li>
          <li className="flex-1 border-transparent border-b-2 hover:border-b-purple-600 hover:text-purple-600">
            <Link href="blog">Blog</Link>
          </li>
          <li className="flex-1 border-transparent border-b-2 hover:border-b-yellow-500 hover:text-yellow-500">
            <Link href="projects">Projects</Link>
          </li>
          <li className="flex-1 border-transparent border-b-2 hover:border-b-green-600 hover:text-green-600">
            <Link href="contact">Contact</Link>
          </li>
        </ul>
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
