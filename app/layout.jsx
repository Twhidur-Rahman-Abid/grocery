import { Roboto, Playfair_Display, Dancing_Script } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
});
const dancingScript = Dancing_Script({
  variable: "--font-dancing-Script",
});

export const metadata = {
  metadataBase: new URL("https://niamahshop.com"),
  title: "Niamah Shop | বিদেশি চকলেট, চিপস ও সেনা বেকারির অরিজিনাল পণ্য",
  description:
    "Niamah Shop-এ পাচ্ছেন অরিজিনাল বিদেশি চকলেট, জুস, চিপস, চিজ, গুঁড়ো দুধসহ বাংলাদেশ সেনাবাহিনীর নিজস্ব বেকারি ও BMTF-এর তৈরি প্রিমিয়াম মানসম্পন্ন খাদ্যপণ্য।",
  keywords: [
    "Niamah Shop",
    "niamahshop.com",
    "নিয়ামাহ শপ",
    "বিদেশি চকলেট",
    "বাংলাদেশ সেনাবাহিনী বেকারি",
    "BMTF Products",
    "সেনাবাহিনীর বিস্কুট",
    "সেনাবাহিনীর মিষ্টি",
    "লাচ্ছা সেমাই",
    "Imported Chocolate Bangladesh",
    "Foreign Chips and Juice",
    "Cheese and Milk Powder",
    "Food and Drink Shop Online",
  ],
  authors: [{ name: "Niamah Shop" }],
  creator: "Niamah Shop",
  publisher: "Niamah Shop",
  alternates: {
    canonical: "https://niamahshop.com/",
  },
  openGraph: {
    title: "Niamah Shop | অরিজিনাল বিদেশি ফুড আইটেম ও সেনা বেকারির পণ্য",
    description:
      "হিউজ কালেকশন! পাচ্ছেন ইম্পোর্টেড চকলেট, জুস, চিপস, চিজ এবং বাংলাদেশ সেনাবাহিনী পরিচালিত বিএমটিএফ (BMTF) ও বেকারির সুস্বাদু বিস্কুট, মিষ্টি ও লাচ্ছা সেমাই।",
    url: "https://niamahshop.com/",
    siteName: "Niamah Shop",
    type: "website",
    locale: "bn_BD",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Niamah Shop Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niamah Shop | বিদেশি চকলেট ও সেনা বেকারির প্রডাক্ট",
    description:
      "অরিজিনাল বিদেশি চকলেট, চিপস, গুঁড়ো দুধ এবং সেনাবাহিনী পরিচালিত BMTF ও বেকারির সেরা প্রডাক্ট কিনতে ভিজিট করুন নিয়ামাহ শপ।",
    images: ["/logo.svg"],
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfairDisplay.variable} ${dancingScript.variable} h-full antialiased `}
    >
      <Navbar />
      <body className="min-h-full flex flex-col font-roboto">{children}</body>
      <Footer />
    </html>
  );
}
