import { config } from 'dotenv';
config();
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
    url: 'https://answers.cpp41419.com.au',
    siteName: 'CPP41419 Guide',
    images: [{ url: 'https://answers.cpp41419.com.au/og-image.jpg' }],
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
      <head>
        {process.env.NODE_ENV === 'production' && process.env.GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.GTM_ID}');
          `,
            }}
          />
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
