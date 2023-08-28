import Peticion from "../../../components/marketplace/Contraparte/peticion";

export default function Contraparte() {
  return (
    <Peticion get={'0,07 BTC'} send={'$ 27.505,20 ARS'}>
      <h3 className="text-lg mb-4">Condiciones del escrow</h3>
      <div className="flex flex-col text-base gap-2">
        <h4 className="text-sm text-light-blue">El precio del Bitcoin se ha cerrado con</h4>
        <div className="flex justify-between">
          <h3>Bitstamp</h3>
          <h3>U$D 10.238,25</h3>
          <h3>17:45:16 HS</h3>
        </div>
        <hr className="border border-[#2E75A9] w-full" />
        <h4 className="text-sm  text-light-blue">Metodo de pago</h4>
        <h3>Transferencia bancaria</h3>
        <hr className="border border-[#2E75A9] w-full" />
        <h4 className="text-sm  text-light-blue">Comision</h4>
        <h3>0.0%</h3>
        <hr className="border border-[#2E75A9] w-full" />
        <h4 className="text-sm text-light-blue">Cotización del dolar</h4>
        <h3>$AR 205,05</h3>
        <hr className="border border-[#2E75A9] w-full" />
      </div>
    </Peticion>
  );
}
