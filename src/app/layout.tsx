import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | Software Developer`,
  description:
    "Modern developer portfolio for a fresh graduate focused on backend development, Flutter, full-stack projects, and mobile applications.",
  keywords: [
    "Backend Developer",
    "Flutter Developer",
    "Fresh Graduate",
    "Next.js Portfolio",
    "Software Engineer"
  ],
  openGraph: {
    title: `${profile.name} | Developer Portfolio`,
    description:
      "Backend, web, mobile, and full-stack projects with screenshots and demo videos.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
