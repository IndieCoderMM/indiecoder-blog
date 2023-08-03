import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'IndieCoder | Tech Blog for Aspiring Developers in Myanmar',
  description:
    "Join me on my coding journey as I share articles, insights and lessons learned. Let's code together!",
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
