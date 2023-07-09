import Navbar from '@/components/Navbar';
import './globals.css';

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
    <header className="flex justify-center w-full bg-white border-b border-slate-200 px-2 py-1">
      <Navbar />
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
        <main className="p-5 maxContentWidth">{children}</main>
        {footer}
      </body>
    </html>
  );
}
