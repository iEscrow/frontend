import Link from "next/link";

const VenderCripto = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <div className="backdrop-opacity-10 bg-white/10 sm:w-full md:w-1/3 sm:p-4 md:p-10 rounded-2xl flex flex-col justify-center items-center">
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
        <div className="divider" />
        <div className="flex md:flex-col gap-6">
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green"
              checked
            />
            <div className="flex flex-col">
              <span className="label-text text-white">PRIVADO</span>
              <p className="sm:hidden md:flex">Tengo la contraparte.</p>
              <p className="sm:hidden md:flex">
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
              <p className="sm:hidden md:flex">No tengo la contraparte.</p>
              <p className="sm:hidden md:flex">Se listará en el Marketplace.</p>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="flex justify-around w-full">
          <button className="btn sm:btn-xs md:btn-md btn-neutral rounded-full">
            ATRAS
          </button>
          <Link href="/marketplace/seleccion">
            <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
              SIGUIENTE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenderCripto;
