import { Poppins } from "next/font/google";
import Nav from "./components/Nav/Nav";
import "./globals.css";

const poppins = Poppins({ style: ["normal"], subsets: ["latin-ext"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "iEscrow",
  description: "iEscrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:text-white text-dark-blue`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
