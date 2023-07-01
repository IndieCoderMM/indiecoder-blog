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
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <img
          src="/logo.jpg"
          width={40}
          height={40}
          className="mx-auto rounded-full"
        />
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">IndieCoder Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my blog.</p>
      </div>
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
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
