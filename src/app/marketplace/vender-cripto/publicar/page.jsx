import Botones from "@/app/components/marketplace/botones";
import { getPriceCMC } from "@/hooks/criptoPrice/coinMarketCap";

const Publicar = async () => {
  const {data} = await getPriceCMC()
  console.log(data[0]);
  return (
    <>
      <>
        <div className="mb-6">
          <p className="text-white sm:text-sm sm:text-center md:text-start">
            Elige una web de la cual tomar el precio de Bitcoin. El precio
            continuará actualizandose hasta que la otra parte acepte el
            intercambio
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:w-5/6 md:w-2/3 ">
        <div className="flex justify-between w-full">
          <div className="flex items-center sm:gap-2 md:gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green"
              checked
            />
            <p className="label-text text-white">Bitstamp</p>
          </div>
          <div>
            <p className="text-green">U$D 10.238,25</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center sm:gap-2 md:gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green"
              checked
            />
            <p className="label-text text-white">CoinMarketCap</p>
          </div>
          <div>
            <p className="text-green">U$D {data[0].quote.USD.price.toFixed(2)}</p>
          </div>
        </div>
        </div>
        <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
        <div className="flex flex-col w-full gap-4 items-center">
          <div>
            <p className="text-xs text-center">% DE COMISIÓN</p>
            <input type="text" className="input w-[172px] h-[36px] bg-white" />
          </div>
          <div>
            <p className="text-xs text-center">ARS TOTAL</p>
            <input
              type="text"
              className="input w-[172px] h-[36px] bg-white"
              placeholder="0.01224"
            />
          </div>
        </div>
        <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
        <Botones texto1={'atras'} texto2={'siguiente'} link1={'/marketplace/vender-cripto/seleccion'} link2={'/marketplace/vender-cripto/contraparte'} />
      </>
    </>
  );
};

export default Publicar;
