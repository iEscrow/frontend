
import { getOffers } from "@/hooks/Offers";
import Orden from "../components/marketplace/orden";
export default async function Marketplace() {
  // const {Offers} = await getOffers()
  const Offers = [
    {
      id: 1,
      name: "Facundo Salas",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 2,
      name: "Pedro Perez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 3,
      name: "Juan Lopez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 4,
      name: "Pablo Bravo",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 5,
      name: "Ana Perez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
  ];
  return (
    <div className="w-full">
      <div className="md:flex gap-4 hidden  ">
        <select className="select w-full">
          <option disabled selected>
            QUIERO
          </option>
          <option>BTC</option>
          <option>USDT</option>
          <option>ETH</option>
        </select>
        <select className="select w-full">
          <option disabled selected>
            PAGO CON
          </option>
          <option>BTC</option>
          <option>USDT</option>
          <option>ETH</option>
        </select>
        <select className="select w-full">
          <option disabled selected>
            PAIS
          </option>
          <option>ARGENTINA</option>
          <option>CHILE</option>
          <option>VENEZUELA</option>
        </select>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="md:flex justify-end hidden">
          <select className="select select-ghost w-fit max-w-xs">
            <option disabled selected>
              ORDERNAR POR
            </option>
            <option>MAS RECIENTE</option>
            <option>MAS ANTIGUO</option>
            <option>PRECIO MAS ALTO</option>
            <option>PRECIO MAS BAJO</option>
          </select>
        </div>
        {Offers?.map((d) => (
            <Orden
              key={d.Offer_id}
              name={d.name}
              send={d.send}
              method={d.method}
            />
          )
        )}
      </div>
    </div>
  );
}
