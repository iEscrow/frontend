import Peticion from "@/app/components/marketplace/Contraparte/peticion";
import Cuenta from "@/app/components/marketplace/cuenta";
import Wallet from "@/app/components/marketplace/wallet";

export default function Seleccion() {
  return (
    <Peticion
      page={"Escrow Aceptado"}
      get={"$ 28.000,00 ARS"}
      send={"100 USDT"}
      back={"/marketplace/comprar-cripto/contraparte/"}
      next={"/marketplace/comprar-cripto/contraparte/publicar"}
    >
      <Cuenta />
      <div className="divider" />
      <Wallet />
    </Peticion>
  );
}
