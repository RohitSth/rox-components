import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeProvider } from "@/context/theme/theme-context";
import { ThemeChanger } from "@/components/rox-components/theme/theme-changer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuroraBackground>
            <Link
              href="/"
              className="absolute top-4 left-1/2 -translate-x-1/2 cursor-pointer bg-white rounded-full text-black uppercase text-xl font-bold px-1 hover:text-white transition-colors duration-300 hover:bg-sky-500"
            >
              ⾕
            </Link>
            <div className="absolute top-4 right-4 flex gap-2 items-center z-40">
              <ThemeChanger />
            </div>
            {children}
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
