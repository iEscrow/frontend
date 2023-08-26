import Peticiion from "@/app/components/marketplace/Contraparte/peticion";
import Cuenta from "@/app/components/marketplace/cuenta";
import Wallet from "@/app/components/marketplace/wallet";
import React from "react";

export default function Seleccion() {
  return (
    <Peticiion
      page={"Escrow Aceptado"}
      get={"$ 28.000,00 ARS"}
      send={"100 USDT"}
      back={"/marketplace/comprar-cripto/contraparte/"}
      next={"/marketplace/comprar-cripto/contraparte/publicar"}
    >
      <div>
        <p className="text-white md:text-lg mb-4">
          Selecciona la cuenta con la cual recibirás la tranferencia bancaria:
        </p>
        <div className="md:ml-14">
          <Cuenta />
        </div>
        <div className="divider" />
        <p className="text-white md:text-lg mb-4">
          Selecciona la wallet con la cual enviarás (Token):
        </p>
        <div className="md:ml-14 mb-4">
          <Wallet />
        </div>
      </div>
    </Peticiion>
  );
}
