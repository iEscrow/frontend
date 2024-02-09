import { Poppins } from "next/font/google";
import Footer from "./components/Footer/footer";
import FooterMobile from "./components/Footer/footerMobile";
import Menu from "./components/Footer/menu";
import Provider from "@/context/Context";
import Nav from "./components/Nav/Nav";
import Replicar from "./components/Replicar/Replicar";
import "./globals.css";
import { Disable } from "./components/account/disable";
import Modales from "./components/Modales";

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
        <Provider>
          <Nav />
          {children}
          <Modales />
          <Footer />
          <FooterMobile />
          <Menu />
        </Provider>
      </body>
    </html>
  );
}
