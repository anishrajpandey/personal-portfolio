import type { Metadata } from "next";
import { Geist, Geist_Mono, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const balooBhai = Baloo_Bhai_2({
  variable: "--font-baloo-bhai",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish Raj Pandey",
  description: "Machine Learning Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${balooBhai.variable} ${balooBhai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
