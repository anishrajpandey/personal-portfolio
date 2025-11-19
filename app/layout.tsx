import type { Metadata } from "next";
import { Baloo_Bhai_2, Montserrat } from "next/font/google";
import "./globals.css";
const balooBhai = Baloo_Bhai_2({
  variable: "--font-baloo-bhai",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const MontserratFont = Montserrat({
  variable: "--font-gothic-a1",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish Raj Pandey | Computer Science Student & Full-Stack Developer",
  description:
    "Personal portfolio of Anish Raj Pandey, a Computer Science student and full-stack MERN developer passionate about AI, web development, and startups. Explore my projects, coding journey, and tech insights.",
  verification: {
    google: "bEbjCvnJUV2XvpXPGUTVAjU5Bx6VRqgAicWLbSvpk8Q",
  },
  keywords: [
    "Anish Raj Pandey",
    "Computer Science student",
    "Full-stack developer",
    "MERN developer",
    "AI developer",
    "Web development",
    "Nepal to USA student",
    "Software engineer portfolio",
    "Tech content creator",
  ],
  authors: [
    { name: "Anish Raj Pandey", url: "https://github.com/anishrajpandey" },
  ],
  creator: "Anish Raj Pandey",
  publisher: "Anish Raj Pandey",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Anish Raj Pandey | Full-Stack Developer & AI Enthusiast",
    description:
      "Discover Anish Raj Pandey’s portfolio featuring full-stack projects, AI experiments, and insights from his journey as a Computer Science student in the USA.",
    url: "https://www.anishrajpandey.com.np",
    siteName: "Anish Raj Pandey Portfolio",
    images: [
      {
        url: "https://www.anishrajpandey.com.np/aboutme.png", // Replace with your rcl OG image
        width: 1200,
        height: 630,
        alt: "Anish Raj Pandey Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${MontserratFont.className} ${balooBhai.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
