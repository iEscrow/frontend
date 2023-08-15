import { Rubik } from "next/font/google";
import Nav from "./components/Nav/Nav";
import "./globals.css";

const rubik = Rubik({ style: ["normal"], subsets: ["latin-ext"] });

export const metadata = {
  title: "iEscrow",
  description: "iEscrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
