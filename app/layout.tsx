import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IndieCoder's Blog | Web Development Articles & Tutorials",
  keywords: [
    "web development",
    "React",
    "Python",
    "game development",
    "tutorials",
    "coding",
    "web design",
  ],
  description:
    "Join me on my coding journey as I share articles, insights and lessons learned. Learn about React, Web Development, Python and game development.",
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
          <main className="paddings">{children}</main>
          <ScrollToTopButton />
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
