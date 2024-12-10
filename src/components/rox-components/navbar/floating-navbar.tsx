"use client";

import React, { useState, useEffect, useRef } from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PersonIcon } from "@radix-ui/react-icons";

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    {
      name: "Weather",
      link: "/weather",
      icon: "☁️",
    },
    {
      name: "Carousel",
      link: "carousel-timeline",
      icon: <PersonIcon className="h-4 w-4" />,
    },
  ];

  useEffect(() => {
    if (isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const isInHoverArea =
          e.clientY <= rect.bottom + 20 &&
          e.clientX >= rect.left - 20 &&
          e.clientX <= rect.right + 20;

        if (isInHoverArea) {
          setIsVisible(true);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        } else if (isVisible) {
          timeoutRef.current = setTimeout(() => setIsVisible(false), 300);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isVisible, isHomePage]);

  return (
    <>
      <div
        ref={navRef}
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
          isHomePage || isVisible
            ? "translate-y-2 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <nav className="bg-white/70 dark:bg-black/70 py-1 backdrop-blur-md rounded-full shadow-lg">
          <ul className="flex items-center px-1 h-10 gap-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                    pathname === item.link
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  <span>{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {!isHomePage && !isVisible && (
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] h-2 bg-gradient-to-r from-transparent via-purple-600 dark:via-sky-500 to-transparent rounded-full blur-sm animate-pulse-slow"
          aria-hidden="true"
        />
      )}
    </>
  );
}
