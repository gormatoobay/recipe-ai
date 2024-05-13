import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scavenger Hunt Generator",
  description: "Enter a theme for the hunt, e.g., 'soccer'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-grow  flex-1">{children}</div>
      </body>
    </html>
  );
}
