import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Hyde Premier League - Local Football Tournaments",
  description: "Join the most exciting local football leagues in Hyde. Premier League, FA Cup, Champions League, and Summer League tournaments.",
  icons: {
    icon: "/hpl_logo_small.jpg",
  },
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
        {children}
        <footer className="bg-black text-gray-400 py-16 px-6 border-t-4 border-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-white font-bold text-2xl mb-4">HYDE PREMIER LEAGUE</h3>
                <p className="text-gray-400">
                  The home of local football in Hyde. Building community through sport.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">TOURNAMENTS</h4>
                <ul className="space-y-3">
                  <li><Link href="/tournaments/premier-league" className="hover:text-white transition-colors duration-300">Premier League</Link></li>
                  <li><Link href="/tournaments/fa-cup" className="hover:text-white transition-colors duration-300">FA Cup</Link></li>
                  <li><Link href="/tournaments/summer-league" className="hover:text-white transition-colors duration-300">Summer League</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">CONNECT</h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.instagram.com/hydepremierleague/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Instagram
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">PARTNERED WITH</h4>
                <div className="flex items-center gap-3">
                  <img
                    src="/sports_england_logo.jpg"
                    alt="Sport England"
                    className="h-30 w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Hyde Premier League. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
