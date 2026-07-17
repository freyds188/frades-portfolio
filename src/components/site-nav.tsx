"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Repos", "repositories"],
  ["Contact", "contact"]
];

export function SiteNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    navItems.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#home" className="text-sm font-semibold">
          Your Name
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <Link
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground",
                active === id && "bg-secondary text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="w-10 px-0 lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-border bg-background/95 px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map(([label, id]) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground",
                  active === id && "bg-secondary text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
