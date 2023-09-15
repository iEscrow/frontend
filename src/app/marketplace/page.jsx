
import { getOffers } from "@/hooks/Offers";
import Orden from "../components/marketplace/orden";
export default async function Marketplace() {
  const {Offers} = await getOffers()
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
        {Offers?.map((d) => {
          return (
            <Orden
              key={d.Offer_id}
              name={d.Owner}
              send={d.Send}
              method={d.Receive}
            />
          );
        })}
      </div>
    </div>
  );
}
