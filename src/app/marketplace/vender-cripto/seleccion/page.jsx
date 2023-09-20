import Botones from "@/app/components/marketplace/botones";
import Cuenta from "@/app/components/marketplace/cuenta";
import Wallet from "@/app/components/marketplace/wallet";

const Seleccion = () => {
  return (
    <>
      <Cuenta />
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <Wallet />
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <div className="flex w-full items-center gap-4  md:justify-evenly">
        <div className="flex flex-col sm:gap-4 md:gap-4">
          <div>
            <p className="text-white sm:text-xs md:text-md">BTC a Enviar</p>
          </div>
          <div>
            <p className="text-white sm:text-xs md:text-md">Cotización Dolar</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              type="text"
              className="input sm:w-[142px] md:w-[172px] sm:h-[26px] md:h-[36px] bg-white"
            />
            <p className="sm:text-[10px] md:text-md">~nro dólares</p>
          </div>
          <div>
            <input
              type="text"
              className="input sm:w-[142px] md:w-[172px] sm:h-[26px] md:h-[36px] bg-white"
            />
          </div>
        </div>
      </div>
      <div className="divider" />
      <Botones
        texto1={"atras"}
        texto2={"siguiente"}
        link1={"/marketplace/vender-cripto/"}
        link2={"/marketplace/vender-cripto/priceBTC"}
      />
    </>
  );
};

export default Seleccion;
