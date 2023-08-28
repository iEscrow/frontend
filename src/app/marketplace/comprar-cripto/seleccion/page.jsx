import Botones from "@/app/components/marketplace/botones";
import Comision from "@/app/components/marketplace/comision";
import Cuenta from "@/app/components/marketplace/cuenta";
import MontoEnviar from "@/app/components/marketplace/montoEnviar";
import Wallet from "@/app/components/marketplace/wallet";

export default function Seleccion() {
  return (
    <>
      <Wallet />
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <Cuenta />
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <MontoEnviar />
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <Comision />
      <div className="divider" />
      <Botones
        texto1={"atras"}
        texto2={"publicar scrow"}
        link1={"/marketplace/comprar-cripto"}
        link2={"/marketplace/comprar-cripto/publicar"}
      />
    </>
  );
}
