import Image from "next/image";
import logo from "../../../assets/logo.svg";
import candado from "../../../assets/candado.svg";

export default function Header() {
  return (
    <div className="w-full gap-y-10">
      <div className="flex items-center md:items-start mb-16">
        <Image src={logo} className="w-[150px] md:w-[250px]" alt="logo" />
      </div>
      <div className="text-white w-full flex items-center md:items-start flex-row">
        <div className="w-full md:w-[30%] text-center md:text-start">
          <p className="text-[24px] font-light leading-tight mb-4  md:text-[36px]">
            Intercambia tus activos de la forma mas segura
          </p>
          <p className="text-justify text-[12px] md:text-[18px] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            qui deleniti blanditiis mollitia incidunt molestias nam dignissimos
            dolore laudantium porro veniam cumque architecto libero aspernatur
            quos harum consectetur doloremque explicabo.
          </p>
        </div>
        <div className="w-[50%] flex items-center md:items-start md:ml-14">
          <Image
            src={candado}
            className="w-[100px] md:w-[120px]"
            alt="candado"
          />
        </div>
      </div>
      <div className="flex items-center md:items-start w-full">
        <button className="text-sm w-[100px] md:w-[130px] rounded-full mt-10 py-2 text-[18px] font-medium bg-green text-blue">
          COMENZAR
        </button>
      </div>
    </div>
  );
}
