import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'humAIne | AI Strategy & Fractional C-Suite Consulting',
  description: 'Human-centric AI experiences built around the needs of your end customer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
