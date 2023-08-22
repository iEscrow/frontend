import Peticiion from "../../../components/marketplace/Contraparte/peticion";

export default function Contraparte() {
  return (
    <Peticiion get={"$ 28.000,00 ARS"} send={"100 USDT"}>
      <h3 className="text-lg mb-2">
        Recibirás una transferencia desde la siguiente cuenta bancaria:
      </h3>
      <div className="flex flex-col gap-1 mb-5">
        <div className="flex ml-44 gap-2 text-sm">
          <h4 className="text-light-blue">Titular</h4>
          <h4>Facundo Salas</h4>
        </div>
        <div className="flex ml-44 gap-2 text-sm">
          <h4 className="text-light-blue">Banco</h4>
          <h4>BBVA</h4>
        </div>
        <div className="flex ml-44 gap-2 text-sm">
          <h4 className="text-light-blue">Número de cuenta</h4>
          <h4>3216 XXX 4351</h4>
        </div>
        <div className="flex ml-44 gap-2 text-sm">
          <h4 className="text-light-blue">CBU</h4>
          <h4>0000 XXXX 4351</h4>
        </div>
      </div>

      <h3 className="text-lg mb-4">Condiciones del escrow</h3>
      <div className="flex flex-col text-base gap-2">
        <h4 className="text-sm ml-5 text-light-blue">Metodo de pago</h4>
        <h3 className="ml-5">Transferencia bancaria</h3>
        <hr className="border border-[#2E75A9] w-full" />
        <h4 className="text-sm ml-5 text-light-blue">Comision</h4>
        <h3 className="ml-5">0.0%</h3>
        <hr className="border border-[#2E75A9] w-full" />
        <h4 className="text-sm ml-5 text-light-blue">Cotización del dolar</h4>
        <h3 className="ml-5 mb-7">$AR 205,05</h3>
      </div>
    </Peticiion>
  );
}
