import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TranslationProvider } from "@/components/translation-context";
import { CookieWidget } from "@/components/cookie-widget";
import { ScrollProgress } from "@/components/scroll-progress";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
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
  metadataBase: new URL('https://nohello.fr/'),
  title: "No Hello",
  description: "Stop saying just 'Hello' in chat. Learn why it's counter-productive and how to communicate more effectively.",
  keywords: ["no hello", "communication", "etiquette", "chat", "productivity", "remote work", "slack etiquette", "discord etiquette"],
  authors: [{ name: "Kaysuto Kimiya", url: "https://github.com/Kaysuto" }],
  creator: "Kaysuto Kimiya",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nohello.fr/",
    title: "No Hello",
    description: "Stop saying just 'Hello' in chat. Learn why it's counter-productive.",
    siteName: "No Hello",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "No Hello",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Hello - Efficient Communication",
    description: "Stop saying just 'Hello' in chat. Save time for everyone.",
    images: ["/icon.png"],
    creator: "@Kaysuto",
  },
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
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TranslationProvider>
            <ScrollProgress />
            <Cursor />
            {children}
            <CookieWidget />
            <Toaster />
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
