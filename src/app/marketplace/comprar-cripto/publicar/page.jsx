import Link from "next/link";

export default function publicar() {
  return (
    <div className="flex flex-col sm:gap-6 md:gap-10">
      <div className="bg-green w-full flex sm:flex-col lg:flex-row lg:justify-center sm:gap-2 md:gap-4 lg:gap-10 py-4 sm:px-2 font-medium md:text-[18px] sm:text-sm text-dark-blue ">
        <div>
          <h3>FACUNDO.SALAS (reput)</h3>
          <h3>Escrow #102212</h3>
        </div>
        <div className="sm:flex sm:gap-2">
          <h3>RECIBIRÁS:</h3>
          <h3>$28.000,00 ARS</h3>
        </div>
        <div className="sm:flex sm:gap-2">
          <h3>ENVIARÁS:</h3>
          <h3>100 USDT</h3>
        </div>
      </div>
      <div className=" flex flex-col 4 gap-6">
        <h1 className="md:text-4xl sm:text-lg text-green">Escrow Publicado!</h1>
        <h3 className="md:text-lg sm:text-sm">
          Tu escrow ya se encuentra publicado en el Marketplace
        </h3>
        <div className="flex gap-1">
          <h3 className="md:text-lg sm:text-sm">Podrás visualizarlo</h3>
          <Link className="md:text-lg sm:text-sm underline " href="/">
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
        <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
          MIS ESCROWS
        </button>
        <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
          MARKETPLACE
        </button>
        <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
          NUEVO ESCROW
        </button>
      </div>
    </div>
  );
}
