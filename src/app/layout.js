import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manage Wise | A comprehensive management platform",
  description: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
