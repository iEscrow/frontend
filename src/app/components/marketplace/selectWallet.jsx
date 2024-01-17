"use client";
import { useApp } from "@/context/Context";
import Botones from "./botones";
const SelectWallet = ({
  texto1 = "atras",
  texto2 = "siguiente",
  link1 = "/",
  link2 = "/marketplace/vender-cripto/seleccion",
}) => {
  const { setOffer, offer } = useApp();
  const handleOption = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };
  return (
    <>
      <div className="flex flex-col items-center gap-6 dark:text-white text-dark-blue">
        <div>
          <p>Enviar</p>
          <select
            name="Send"
            value={offer?.Send}
            onChange={handleOption}
            className="select w-60 bg-white text-blue"
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>
        <div>
          <p>Recibir</p>
          <select
            name="Receive"
            value={offer?.Receive}
            onChange={handleOption}
            className="select w-60 bg-white text-blue"
          >
            <option value="USDT">USDT</option>
            <option value="Transfer">Transferencia</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-4">
          <input
            onClick={handleOption}
            type="radio"
            name="Access"
            value="Private"
            className="radio checked:bg-green"
          />
          <div className="flex flex-col">
            <span className="label-text dark:text-white text-dark-blue font-semibold">PRIVADO</span>
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
            onClick={handleOption}
            type="radio"
            name="Access"
            value="Public"
            className="radio checked:bg-green"
          />
          <div className="flex flex-col">
            <span className="label-text dark:text-white text-dark-blue font-semibold">PÚBLICO</span>
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
        texto1={texto1}
        texto2={texto2}
        link1={link1}
        link2={link2}
      />
    </>
  );
};

export default SelectWallet;
