import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'IndieCoder Blog',
  description: 'Programming Blog Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-5 maxContentWidth">{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
