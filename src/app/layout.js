import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ style: ["normal"], weight: ["300"], subsets: ["latin-ext"] });

export const metadata = {
  title: "iEscrow",
  description: "iEscrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
