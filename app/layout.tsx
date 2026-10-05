import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Shrestha - Portfolio",
  description: "Om Shrestha's Portfolio - Showcasing Projects, Skills, and Contact Information",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={GeistMono.variable + " h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
