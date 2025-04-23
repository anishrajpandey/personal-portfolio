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
        className={`${MontserratFont.className} ${balooBhai.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
