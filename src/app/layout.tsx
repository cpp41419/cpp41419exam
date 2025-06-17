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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CPP41419.com.au",
    "alternateName": "CPP41419 Independent RTO Assessment Platform",
    "url": "https://cpp41419.com.au/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cpp41419.com.au/logo.png"
    },
    "description": "Australia's independent RTO evaluation platform for CPP41419 Certificate IV Real Estate Practice training",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "addressRegion": "Australia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1300 277 419",
      "contactType": "Customer Service",
      "email": "contact@cpp41419.com.au",
      "availableLanguage": "English",
      "areaServed": "AU"
    },
    "sameAs": [
      "https://twitter.com/cpp41419",
      "https://www.facebook.com/cpp41419"
    ],
    "knowsAbout": [
      "CPP41419 Certificate IV Real Estate Practice",
      "RTO Assessment",
      "Education Quality Evaluation",
      "Real Estate Training Australia"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://cpp41419.com.au/",
    "name": "CPP41419.com.au - Certificate IV Real Estate Practice",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cpp41419.com.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Independent CPP41419 RTO Evaluation Service",
    "description": "Anonymous assessment and comparison of CPP41419 Certificate IV Real Estate Practice training providers across Australia",
    "provider": {
      "@type": "Organization",
      "name": "CPP41419.com.au"
    },
    "serviceType": "Educational Assessment",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CPP41419 RTO Assessment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anonymous CPP41419 RTO Evaluation",
            "description": "Protected assessment of CPP41419 training provider quality and responsiveness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CPP41419 Provider Comparison Tool",
            "description": "Side-by-side analysis of 87 CPP41419 training providers"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CPP41419 Certificate IV in Real Estate Practice",
    "description": "Nationally recognized qualification required for real estate licensing across Australia",
    "provider": {
      "@type": "Organization",
      "name": "Various RTOs assessed by CPP41419.com.au"
    },
    "educationalCredentialAwarded": "Certificate IV",
    "occupationalCredentialAwarded": "Real Estate Agent License Eligibility",
    "courseCode": "CPP41419",
    "coursePrerequisites": "No formal prerequisites required",
    "timeRequired": "P6M",
    "educationalLevel": "Vocational",
    "inLanguage": "en-AU",
    "about": [
      "Real Estate Practice",
      "Property Management", 
      "Sales Techniques",
      "Legal Compliance",
      "Trust Accounting"
    ],
    "teaches": [
      "Property appraisal techniques",
      "Legal compliance in real estate",
      "Client communication skills",
      "Trust account management",
      "Marketing strategies"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CPP41419 Certificate IV in Real Estate Practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 Certificate IV in Real Estate Practice is the nationally recognized qualification required to become a licensed real estate agent in Australia. It covers property law, sales techniques, trust accounting, and ethical practices across all states and territories."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best CPP41419 training provider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use CPP41419.com.au anonymous evaluation system to assess provider quality without sales pressure. We test 87 providers across transparency, support quality, and student outcomes to help you make informed decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does CPP41419 training take to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 typically takes 6-12 months to complete, depending on study mode (online vs classroom) and time commitment. Self-paced online courses can be completed faster with dedicated study."
        }
      },
      {
        "@type": "Question",
        "name": "What states recognize CPP41419 for real estate licensing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 is nationally recognized across all Australian states and territories: NSW, VIC, QLD, WA, SA, TAS, ACT, and NT. Additional state-specific licensing requirements may apply."
        }
      },
      {
        "@type": "Question",
        "name": "How much does CPP41419 training cost in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPP41419 training costs range from $1,000-$3,500 depending on the provider and delivery method. Online courses are typically cheaper than classroom delivery. Use CPP41419.com.au to compare pricing across 87 assessed providers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I study CPP41419 online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CPP41419 can be completed 100% online through many RTOs. Online delivery offers flexibility for working professionals and those in regional areas. Check CPP41419.com.au provider comparisons for online options."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cpp41419.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CPP41419 Certificate IV Real Estate Practice",
        "item": "https://cpp41419.com.au/cpp41419-certificate-iv-real-estate-practice"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CPP41419.com.au",
    "image": "https://cpp41419.com.au/og-image.png",
    "description": "Independent assessment platform for CPP41419 Certificate IV Real Estate Practice training providers across Australia",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New South Wales"
      },
      {
        "@type": "State", 
        "name": "Victoria"
      },
      {
        "@type": "State",
        "name": "Queensland"
      },
      {
        "@type": "State",
        "name": "Western Australia"
      },
      {
        "@type": "State",
        "name": "South Australia"
      },
      {
        "@type": "State",
        "name": "Tasmania"
      },
      {
        "@type": "Territory",
        "name": "Australian Capital Territory"
      },
      {
        "@type": "Territory",
        "name": "Northern Territory"
      }
    ],
    "url": "https://cpp41419.com.au/"
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Best CPP41419 Training Provider",
    "description": "Step-by-step guide to selecting quality CPP41419 Certificate IV Real Estate Practice training using independent assessment",
    "totalTime": "PT10M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device with internet access"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Take CPP41419 Suitability Assessment",
        "text": "Complete our 2-minute quiz to identify your learning preferences, budget, and timeline requirements for CPP41419 training.",
        "url": "https://cpp41419.com.au/quiz"
      },
      {
        "@type": "HowToStep",
        "name": "Review CPP41419 Provider Quality Scores", 
        "text": "Examine our independent assessment of provider transparency, response quality, and student support metrics for CPP41419 courses.",
        "url": "https://compare.cpp41419.com.au/"
      },
      {
        "@type": "HowToStep",
        "name": "Use Anonymous CPP41419 Provider Evaluation",
        "text": "Submit questions to CPP41419 providers without revealing your identity to assess their genuine responsiveness.",
        "url": "https://cpp41419.com.au/evaluation"
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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
        <link rel="canonical" href="https://answers.cpp41419.com.au" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
