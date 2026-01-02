import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { CookieWidget } from "@/components/cookie-widget";
import { ExternalLink } from "@/components/external-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Hello",
  description: "Don't just say hello. Say hello and explain why you're messaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieWidget />
          <Toaster />
          <footer className="container mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground border-t border-border mt-12 space-y-2">
            <p className="flex items-center justify-center gap-1 flex-wrap">
              Inspiré par
              <ExternalLink href="https://nohello.net" label="nohello.net">nohello.net</ExternalLink>
              • Reconstruit avec
              <ExternalLink href="https://nextjs.org" label="Next.js">Next.js</ExternalLink>
              &
              <ExternalLink href="https://ui.shadcn.com" label="Shadcn/ui">Shadcn</ExternalLink>
            </p>
            <p className="flex items-center justify-center gap-1">
              Fait avec ❤️ par
              <ExternalLink href="https://github.com/Kaysuto" label="Kaysuto Kimiya">Kaysuto Kimiya</ExternalLink>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
