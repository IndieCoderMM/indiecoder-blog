import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'IndieCoder Blog',
  description:
    'Welcome to my blog, where I share my experiences, insights and lessons learned on my coding journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main className="p-5 maxContentWidth">{children}</main>
          <ScrollToTopButton />
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
