import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Mathis Boche | Ingénierie Digitale & Stratégie",
  description: "Approches innovantes, maîtrise technologique, vision stratégique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--c1)] via-[var(--c2)] to-[var(--c3)] hover:brightness-150">
              MB
            </h1>
            <nav className="flex gap-6 text-sm text-gray-300">
              <a href="#expertise" className="hover:text-white">expertise</a>
              <a href="#parcours" className="hover:text-white">parcours</a>
              <a href="#vision" className="hover:text-white">vision</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow pt-24">
          {children}
        </main>
        <footer className="w-full border-t border-white/10 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} mathis boche
        </footer>
      </body>
    </html>
  );
}
