import { Poppins } from "next/font/google";
import Nav from "./components/Nav/Nav";
import "./globals.css";
import Footer from "./components/Footer/footer";
import FooterMobile from "./components/Footer/footerMobile";
import OfferProvider from "@/context/OffersContext";

const poppins = Poppins({ style: ["normal"], subsets: ["latin-ext"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "iEscrow",
  description: "iEscrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:text-white text-dark-blue`}>
        <OfferProvider>
        <Nav />
        {children}
        <Footer />
        <FooterMobile />
        </OfferProvider>
      </body>
    </html>
  );
}
