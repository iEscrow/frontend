import Link from "next/link";
import Botones from "../botones";
export default function Peticion({
  children,
  page,
  get,
  send,
  back = "/",
  next = "/",
}) {
  return (
    <>
      <div className="flex mb-6 w-full">
        <h1 className="md:text-4xl sm:text-2xl text-green">{page}</h1>
      </div>
      <div className="w-full flex sm:flex-col md:flex-row justify-between p-6 font-medium bg-green text-dark-blue mb-10 gap-2">
        <div className="flex flex-col">
          <h3>FACUNDO.SALAS (reput)</h3>
          <h3>Escrow #102212</h3>
        </div>
        <div className="flex sm:flex-col md:items-center">
          <h3>RECIBIRÁS</h3>
          <h3>{get}</h3>
        </div>
        <div className="flex sm:flex-col md:items-center">
          <h3>ENVIARÁS</h3>
          <h3>{send}</h3>
        </div>
      </div>
      <div className="w-full">{children}</div>
      {page === "Escrow Confirmado" ? (
        <div className="flex justify-center">
          <Link
            href="/"
            className="uppercase bg-dark-blue md:px-8 py-1 sm:px-2   rounded-[20px]"
          >
            Mis Escrows
          </Link>
        </div>
      ) : (
        <>
          <div className="divider" />
          <Botones
            texto1={"atras"}
            texto2={page === "Escrow Aceptado" ? "CONFIRMAR" : "ACEPTAR ESCROW"}
            link1={back}
            link2={next}
          />
        </>
      )}
    </>
  );
}
