import Image from "next/image";
import candado from "../../../assets/candado.svg";
import logoDark from "../../../assets/logo-dark.svg";
import logo from "../../../assets/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full sm:flex sm:flex-col sm:justify-start">
      <div className="flex sm:justify-center lg:justify-start mb-6">
        <Image src={logo} className="w-[250px] hidden dark:flex" alt="logo" />
        <Image src={logoDark} className="w-[250px] dark:hidden" alt="logo" />
      </div>
      <div className="w-full flex items-center md:items-start flex-row">
        <div className="w-full xl:w-[30%] text-center lg:text-start">
          <p className="text-[24px] md:text-[32px] lg:text-[40px] font-light leading-tight mb-4 ">
            Intercambia tus activos de la forma mas segura
          </p>
          <p className="text-justify text-[12px] lg:text-[14px] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            qui deleniti blanditiis mollitia incidunt molestias nam dignissimos
            dolore laudantium porro veniam cumque architecto libero aspernatur
            quos harum consectetur doloremque explicabo.
          </p>
        </div>
        <div className="w-[50%] flex items-center md:items-start md:ml-14 sm:hidden lg:flex">
          <Image
            src={candado}
            className="w-[100px] md:w-[120px]"
            alt="candado"
          />
        </div>
      </div>
      <div className="flex sm:justify-center lg:justify-start w-full py-6">
        <Link href={"/marketplace/vender-cripto"}>
          <button className=" sm:btn-sm md:btn-md bg-blue-2 rounded-full">
            COMENZAR
          </button>
        </Link>
      </div>
    </div>
  );
}
