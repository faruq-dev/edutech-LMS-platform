import type { Metadata } from "next";
import { Rubik, Manrope } from "next/font/google";
import "./globals.css";
import { dbConnect } from "@/service/db";
import Navbar from "@/components/Navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edutech | World's Best LMS Platform",
  description: "Generated by Omar Faruque",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();

  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${manrope.variable} antialiased relative`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
