import Link from "next/link";
import Botones from "./botones";
const VenderCripto = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-white">
        <div>
          <p>Enviar</p>
          <select className="select w-60 bg-white text-blue">
            <option>BTC</option>
          </select>
        </div>
        <div>
          <p>Recibir</p>
          <select className="select w-60 bg-white text-blue">
            <option>USDT</option>
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
