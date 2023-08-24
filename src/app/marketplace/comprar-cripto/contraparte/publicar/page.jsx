import Peticiion from "@/app/components/marketplace/Contraparte/peticion";

export default function Publicar() {
  return (
    <Peticiion
      page={"Escrow Confirmado"}
      get={"$ 28.000,00 ARS"}
      send={"100 USDT"}
    >
      <div className="flex flex-col gap-6 mb-6">
      <h1 className="text-4xl text-green">Perfecto!</h1>
      <h3 className="text-lg">
        Notificaremos a tu contraparte para que realice la transferencia
        bancaria.
      </h3>
      <h3 className="text-2xl">Gracias por utilizar iEscrow!</h3>
      </div>
    </Peticiion>
  );
}
