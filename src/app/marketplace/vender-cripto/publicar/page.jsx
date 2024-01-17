import Link from "next/link";

const Publicar = async () => {
  return (
    <div className="flex flex-col sm:gap-6 md:gap-10">
    <div className=" flex flex-col 4 gap-6">
      <h1 className="md:text-4xl sm:text-lg text-blue-2 dark:text-light-blue">Escrow Publicado!</h1>
      <h3 className="md:text-lg sm:text-sm">
        Tu escrow ya se encuentra publicado en el Marketplace
      </h3>
      <div className="flex gap-1">
        <h3 className="md:text-lg sm:text-sm">Podrás visualizarlo</h3>
        <Link className="md:text-lg sm:text-sm underline text-blue-2 dark:text-light-blue " href="/marketplace">
          aquí.
        </Link>
      </div>
      <h3 className="md:text-lg sm:text-sm">
        Te notificaremos cuando un usuario quiera completar el intercambio.
      </h3>
      <h3 className="md:text-2xl sm:text-base">
        Gracias por utilizar iEscrow!
      </h3>
    </div>
    <div className="flex md:gap-5 sm:gap-2 justify-center md:text-lg sm:text-xs md:font-semibold">
      <button className=" sm:btn-xs md:btn-md bg-blue-2 text-white rounded-full shadow-md">
        MIS ESCROWS
      </button>
      <button className="sm:btn-xs md:btn-md bg-blue-2 text-white rounded-full shadow-md">
        MARKETPLACE
      </button>
      <button  className="sm:btn-xs md:btn-md bg-blue-2 text-white rounded-full shadow-md">
        NUEVO ESCROW
      </button>
    </div>
  </div>
  );
};

export default Publicar;
