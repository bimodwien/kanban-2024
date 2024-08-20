import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kanban-2024',
  description: 'Creating a Kanban App in 2024',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16 bg-[#FAF9F6]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
