"use client"
import Image from 'next/image'
import logoDark from "@/assets/logo-dark.svg";
import logo from "@/assets/logo.svg";
import { usePathname,  } from 'next/navigation'
export default function Header() {
    const url = usePathname()
  return (
    <>
        <div>
        <Image
          src={logo}
          className="w-[150px] md:w-[250px] hidden dark:flex"
          alt="logo"
        />
        <Image
          src={logoDark}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
      </div>
      <h1 className="text-4xl ">Centro de ayuda</h1>
      {url !== '/help-center/form' ? <p className="text-lg text-center">¿Cómo podemos ayudarte?</p> : <p className="text-lg text-center">Enviarnos una consulta utilizando nuestro formulario de contacto.</p> }
      <div className="flex justify-center ">
        {url !== "/help-center/form" && (
          <div className="flex justify-between bg-input-gay w-96 rounded p-2 ">
            <input
              type="text"
              placeholder="BUSCAR"
              className="bg-transparent placeholder:text-gray  focus:outline-none"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="#1B80A4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9984 19.0004L14.6484 14.6504"
                  stroke="#1B80A4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
