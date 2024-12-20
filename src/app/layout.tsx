import type { Metadata } from "next";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeProvider } from "@/context/theme/theme-context";
import { ThemeChanger } from "@/components/rox-components/theme/theme-changer";
import FloatingNavbar from "@/components/rox-components/navbar/floating-navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      <body className={` antialiased`}>
        <ThemeProvider>
          <AuroraBackground>
            <TooltipProvider>
              <FloatingNavbar />
              <div className="absolute top-4 right-4 flex gap-2 items-center z-40">
                <ThemeChanger />
              </div>
              {children}
            </TooltipProvider>
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
