"use client"
import { useOffer } from "@/context/OffersContext";
import Botones from "./botones";
const VenderCripto = () => {
  const {setOffer, offer} = useOffer()
  console.log(offer);
  const handleOption = (e) => {
    const {name, value} = e.target
    setOffer({...offer, [name]: value })
  }
  return (
    <>
      <div className="flex flex-col gap-6 text-white">
        <div>
          <p>Enviar</p>
          <select name="Send" value={offer?.Send} onChange={handleOption}  className="select w-60 bg-white text-blue">
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>
        <div>
          <p>Recibir</p>
          <select name="Receive" value={offer?.Receive} onChange={handleOption} className="select w-60 bg-white text-blue">
            <option value="USDT">USDT</option>
            <option value="Transfer">Transferencia</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-6">
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PRIVADO</span>
            <p className="sm:hidden md:flex text-xs">
              Ya tengo la contraparte.
            </p>
            <p className="sm:hidden md:flex text-xs">
              No figurará en el Marketplace.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PÚBLICO</span>
            <p className="sm:hidden md:flex text-xs">
              No tengo la contraparte.
            </p>
            <p className="sm:hidden md:flex text-xs">
              Se listará en el Marketplace.
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <Botones
        texto1={"atras"}
        texto2={"siguiente"}
        link1={"/"}
        link2={"/marketplace/vender-cripto/seleccion"}
      />
    </>
  );
};

export default VenderCripto;
