import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CPP41419 NSW Guide - Free Real Estate License Handbook',
  description: 'Download your free guide to mastering CPP41419 Certificate IV in Real Estate Practice.',
  keywords: ['real estate regions Australia', 'become real estate agent Sydney', 'Melbourne property market', 'Brisbane real estate career', 'Perth agent requirements', 'regional real estate guide'],
  openGraph: {
    title: 'CPP41419 NSW Guide',
    description: 'Free downloadable handbook for real estate licensing in NSW.',
    url: 'https://yourdomain.com',
    siteName: 'CPP41419 Guide',
    images: [{ url: 'https://yourdomain.com/og-image.jpg' }],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
