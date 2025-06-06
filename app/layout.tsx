import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import styles from "./layout.module.scss";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LS Code",
  description: "LS Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.container} ${sora.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
