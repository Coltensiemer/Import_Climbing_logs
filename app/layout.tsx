import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Log Book Import",
  description: "Visualize your log book data with ease",
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
        <div className="min-h-screen flex flex-col bg-white text-slate-900">
          {/* Header */}
          <header className="h-14 border-b bg-white flex items-center px-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-800 rounded-sm text-white flex items-center justify-center font-bold">L</div>
              <div className="font-semibold">Logbook Climbing</div>
            </div>
            <nav className="ml-auto hidden md:flex items-center gap-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-900">Dashboard</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Imports</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Settings</a>
            </nav>
          </header>

          {/* Content area with sidebar + main */}
          <div className="flex flex-1">
            <aside className="w-64 border-r bg-slate-50 p-4 hidden md:block">
              <ul className="space-y-2 text-sm">
                <li className="font-medium">Navigation</li>
                <li>
                  {// TODO: This will switch this Graph View/ Table View based on user preference
                  }
                  <a href="?view=table" className="block py-2 px-2 rounded hover:bg-slate-100">Table</a>
                </li>
                <li>
                  <a href="?view=graph" className="block py-2 px-2 rounded hover:bg-slate-100">Graph</a>
                </li>
              </ul>
            </aside>

            <main className="flex-1 p-6 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
