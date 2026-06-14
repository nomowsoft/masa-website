import type { Metadata, Viewport } from "next";
import "./globals.css";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://masa.sa";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B6B44",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ماسا للتقنية والاستشارات | Masa Technology & Consultancy",
    template: "%s | ماسا للتقنية والاستشارات",
  },
  description:
    "ماسا للتقنية والاستشارات - شريك ذهبي لـ Odoo في المملكة العربية السعودية. نقدم حلول رقمية متكاملة، تنفيذ مشاريع ERP، دعم فني، واستشارات تقنية لتحقيق التحول الرقمي.",
  keywords: [
    "ماسا",
    "Masa",
    "استشارات تقنية",
    "حلول رقمية",
    "Odoo",
    "شريك ذهبي Odoo",
    "ERP",
    "تحول رقمي",
    "السعودية",
    "الرياض",
    "تنفيذ مشاريع",
    "دعم فني",
    "تكامل أنظمة",
  ],
  authors: [{ name: "Masa Technology & Consultancy", url: baseUrl }],
  creator: "Masa Technology & Consultancy",
  publisher: "Masa Technology & Consultancy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: baseUrl,
    siteName: "ماسا للتقنية والاستشارات",
    title: "ماسا للتقنية والاستشارات | Masa Technology & Consultancy",
    description:
      "شريك ذهبي لـ Odoo في السعودية. حلول رقمية متكاملة لتحسين كفاءة أعمالك.",
    images: [
      {
        url: "/navbar/logo_masa.svg",
        width: 300,
        height: 100,
        alt: "شعار ماسا للتقنية والاستشارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ماسا للتقنية والاستشارات | Masa Technology & Consultancy",
    description:
      "شريك ذهبي لـ Odoo في السعودية. حلول رقمية متكاملة لتحسين كفاءة أعمالك.",
    images: ["/navbar/logo_masa.svg"],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/navbar/logo_masa.svg",
    apple: "/navbar/logo_masa.svg",
  },
  category: "technology",
};

// Organization structured data (JSON-LD) for rich search results
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ماسا للتقنية والاستشارات",
  alternateName: "Masa Technology & Consultancy",
  url: baseUrl,
  logo: `${baseUrl}/navbar/logo_masa.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966537802802",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O.Box 295940",
    addressLocality: "Riyadh",
    postalCode: "12612",
    addressCountry: "SA",
  },
  sameAs: [
    "https://wa.me/+9660510350361",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/navbar/logo_masa.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body style={{ fontFamily: "CustomFontName, sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div
          style={{
            position: "fixed",
            left: "2rem",
            bottom: "5rem",
            zIndex: 1000,
          }}
        >
          <Link
            href="https://wa.me/+9660510350361"
            target="_blank"
            rel="noopener noreferrer"
            className="block lg:hidden"
            aria-label="تواصل معنا عبر واتساب"
          >
            <Image
              src="/footer/whatsapp.png"
              alt="أيقونة واتساب - تواصل معنا"
              width={60}
              height={60}
            />
          </Link>
          <Link
            href="https://web.whatsapp.com/send?phone=+966510350361"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
            aria-label="تواصل معنا عبر واتساب ويب"
          >
            <Image
              src="/footer/whatsapp.png"
              alt="أيقونة واتساب - تواصل معنا"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
