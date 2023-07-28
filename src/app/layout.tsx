import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog | ShuShu 舒舒',
  description: '歡迎查看我的部落格！'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
