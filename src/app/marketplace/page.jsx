import Image from "next/image";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Orden from "../components/marketplace/orden";
export default function Marketplace() {
  const data = [
    {
      id: 1,
      name: "Facundo Salas",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 2,
      name: "Pedro Perez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 3,
      name: "Juan Lopez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 4,
      name: "Pablo Bravo",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
    {
      id: 5,
      name: "Ana Perez",
      send: "0,07 BTC",
      price: "27.505,20 ARS",
      method: "Tansferencia bancaria",
    },
  ];
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <Image
        src={logo}
        className="w-[150px] md:w-[250px] hidden  dark:flex"
        alt="logo"
      />
      <Image
        src={logoDark}
        className="w-[150px] md:w-[250px] dark:hidden "
        alt="logo"
      />

      <div className="flex gap-4 md:w-2/4">
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
      <div className="flex flex-col md:w-[35%] gap-3 mb-3 ">
        <div className="flex justify-end">
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
        {data.map((d) => {
          return (
            <Orden
              key={d.id}
              name={d.name}
              send={d.send}
              price={d.price}
              method={d.method}
            />
          );
        })}
      </div>
    </div>
  );
}
