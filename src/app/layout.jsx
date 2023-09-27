import { Poppins } from "next/font/google";
import Footer from "./components/Footer/footer";
import FooterMobile from "./components/Footer/footerMobile";
import OfferProvider from "@/context/OffersContext";
import BankContext from "@/context/BankContext";
import Nav from "./components/Nav/Nav";
import AgregarCuenta from "./components/marketplace/AccionesCuenta/agregar";
import EditarCuenta from "./components/marketplace/AccionesCuenta/editar";
import EliminarCuenta from "./components/marketplace/AccionesCuenta/eliminar";
import AgregarWallet from "./components/marketplace/AccionesWallet/agregar";
import EditarWallet from "./components/marketplace/AccionesWallet/editar";
import EliminarWallet from "./components/marketplace/AccionesWallet/eliminar";
import "./globals.css";

const poppins = Poppins({
  style: ["normal"],
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "iEscrow",
  description: "iEscrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:text-white text-dark-blue`}>
        <OfferProvider>
          <BankContext>
            <Nav />
            {children}
            <EditarCuenta />
            <EliminarCuenta />
            <AgregarCuenta />
            <EditarWallet />
            <EliminarWallet />
            <AgregarWallet />
            <Footer />
            <FooterMobile />
          </BankContext>
        </OfferProvider>
      </body>
    </html>
  );
}
