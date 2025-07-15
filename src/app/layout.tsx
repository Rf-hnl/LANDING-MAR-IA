import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MAR-IA Landing Page',
  description: 'Impulsa tus ventas con Inteligencia Artificial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
