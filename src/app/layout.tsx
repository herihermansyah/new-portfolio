import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Layouts from "@/layouts/layouts";

const poppinsFonts = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Herman | Frontend Web Developer Portfolio",
    template: "%s | Herman",
  },
  description:
    "Portfolio of Herman, a passionate Frontend Web Developer specializing in building responsive, high-performance, and modern web applications using Next.js and Tailwind CSS.",
  keywords: [
    "Herman",
    "Frontend Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Portfolio Developer Indonesia",
    "Surabaya Web Developer",
  ],
  authors: [{name: "Herman"}],
  creator: "Herman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hermansyah-frontend.vercel.app/",
    title: "Herman | Frontend Web Developer Portfolio",
    description:
      "Explore Herman's web development portfolio. Specialized in Next.js, React, and creating pixel-perfect responsive web experiences.",
    siteName: "Herman Portfolio",
    images: [
      {
        url: "https://hermansyah-frontend.vercel.app/on-graph.webp",
        width: 1200,
        height: 630,
        alt: "Herman Frontend Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herman | Frontend Web Developer Portfolio",
    description:
      "Explore Herman's web development portfolio. Specialized in Next.js, React, and Tailwind CSS.",
    images: ["https://hermansyah-frontend.vercel.app/on-graph.webp"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsFonts.className} h-full antialiased bg-clear-off-white scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
