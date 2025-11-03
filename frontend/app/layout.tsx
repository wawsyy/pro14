import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Weight Trend - Encrypted Weight Tracking",
  description: "Track your daily weight changes with fully homomorphic encryption",
  icons: {
    icon: "/icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="weight-trend-bg text-foreground antialiased">
        <div className="fixed inset-0 w-full h-full weight-trend-bg z-[-20] min-w-[850px]"></div>
        <main className="flex flex-col max-w-screen-lg mx-auto pb-20 min-w-[850px]">
          <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="Weight Trend Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold text-white">Weight Trend</h1>
            </div>
          </nav>
          <ErrorBoundary>
            <Providers>{children}</Providers>
          </ErrorBoundary>
        </main>
      </body>
    </html>
  );
}

