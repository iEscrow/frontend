import Image from "next/image";
import logoDark from "@/assets/logo-dark.svg";
import logo from "@/assets/logo.svg";
import Link from "next/link";

export default function Reputation() {
  return (
    <div className="flex flex-col gap-10 pb-10 md:px-20  md:w-[50vw] px-5">
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
      <section className="flex flex-col gap-5">
          <h1 className="md:text-4xl text-2xl">
            Mi reputación{" "}
            <span className="text-light-blue font-semibold">11</span>
          </h1>
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g filter="url(#filter0_d_2476_1106)">
                <rect x="2" y="1" width="36" height="36" rx="18" fill="white" />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.357 27.6915C8.28204 25.3905 7.01889 22.3431 7.01889 19.0007C7.01889 11.8311 12.8311 6.01889 20.0007 6.01889C27.1704 6.01889 32.9825 11.8311 32.9825 19.0007C32.9825 22.386 31.6868 25.4686 29.5641 27.7797C29.2635 26.3578 28.6499 25.0162 27.7634 23.8545C26.6824 22.4379 25.2363 21.3423 23.5801 20.685C24.5426 19.9277 25.2452 18.8892 25.5901 17.7139C25.9349 16.5387 25.9049 15.2852 25.5042 14.1279C25.1035 12.9705 24.352 11.9668 23.3543 11.2564C22.3566 10.5461 21.1623 10.1643 19.9375 10.1643C18.7127 10.1643 17.5184 10.5461 16.5207 11.2564C15.523 11.9668 14.7715 12.9705 14.3708 14.1279C13.9701 15.2852 13.9401 16.5387 14.2849 17.7139C14.6298 18.8892 15.3324 19.9277 16.295 20.685C14.6456 21.3458 13.2064 22.4418 12.131 23.8562C11.2658 24.994 10.6621 26.3035 10.357 27.6915ZM12.0532 29.2662C14.2494 30.969 17.0067 31.9825 20.0007 31.9825C22.967 31.9825 25.701 30.9876 27.8871 29.3133C27.8204 29.1972 27.7776 29.0676 27.7626 28.9322C27.547 27.013 26.6318 25.2404 25.192 23.9532C23.7521 22.6661 21.8885 21.9545 19.9571 21.9545C18.0258 21.9545 16.1622 22.6661 14.7223 23.9532C13.2824 25.2404 12.3673 27.013 12.1517 28.9322C12.1388 29.0497 12.1051 29.1626 12.0532 29.2662ZM5.27344 19.0007C5.27344 10.8671 11.8671 4.27344 20.0007 4.27344C28.1344 4.27344 34.728 10.8671 34.728 19.0007C34.728 27.1344 28.1344 33.728 20.0007 33.728C11.8671 33.728 5.27344 27.1344 5.27344 19.0007ZM17.7556 19.326C18.4015 19.7576 19.1608 19.9879 19.9375 19.9879C20.9791 19.9879 21.978 19.5741 22.7145 18.8376C23.451 18.1011 23.8648 17.1022 23.8648 16.0606C23.8648 15.2839 23.6344 14.5246 23.2029 13.8787C22.7714 13.2329 22.158 12.7295 21.4404 12.4323C20.7228 12.135 19.9331 12.0573 19.1713 12.2088C18.4095 12.3603 17.7097 12.7344 17.1605 13.2836C16.6113 13.8328 16.2372 14.5326 16.0857 15.2944C15.9342 16.0563 16.0119 16.8459 16.3092 17.5635C16.6064 18.2811 17.1098 18.8945 17.7556 19.326Z"
                fill="#02284A"
              />
              <defs>
                <filter
                  id="filter0_d_2476_1106"
                  x="0.254545"
                  y="0.127273"
                  width="39.4909"
                  height="39.4909"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.872727" />
                  <feGaussianBlur stdDeviation="0.872727" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2476_1106"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2476_1106"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div>
              <p className="md:text-lg">Nombre de usuario</p>
              <p className="text-xs">miembro activo desde: 15/12/2022</p>
            </div>
          </div>
          <div className="md:pl-10">
            <p className="text-light-blue">Escrows completados:</p>
            <p className="pl-5"><Link className="underline" href="./reputation/completed">11</Link> (91.6% Positivos)</p>
            <p className="text-light-blue">Escrows completados sin reclamos:</p>
            <p className="pl-5">10 (83.3% Positivos)</p>
            <p className="text-light-blue">
              Escrows completados con reclamo abierto:
            </p>
            <p className="pl-5">1 (8.4% Positivos)</p>
            <p className="text-light-blue">
              Escrows cancelados con reclamo abierto por la contraparte:
            </p>
            <p className="pl-5"><Link className="underline" href="./reputation/canceled">1</Link> (8.4% Positivos)</p>
          </div>
        </section>
        <div className="divider" />
        <section className="flex flex-col gap-5">
          <div>
            <p>Escrow privado #102212 - 20/06/2023</p>
            <div className="pl-5">
              <p>
                <span className="text-light-blue">Envió</span> Cripto{" "}
              </p>
              <p>
                <span className="text-light-blue">Recibió</span> Transferencia
                bancaria{" "}
              </p>
              <p className="text-green">
                <span className="text-light-blue">Calificación </span>Positiva
              </p>
              <span className="text-light-blue">Comentario</span>
              <p className="pl-5">“Transferencia rápida y confiable”</p>
            </div>
          </div>
          <div className="divider" />
          <div>
            <p>Escrow privado #102212 - 20/06/2023</p>
            <div className="pl-5">
              <p>
                <span className="text-light-blue">Envió</span> Cripto{" "}
              </p>
              <p>
                <span className="text-light-blue">Recibió</span> Transferencia
                bancaria{" "}
              </p>
              <p className="text-gray">
                <span className="text-light-blue">Calificación </span>Neutral
              </p>
              <span className="text-light-blue">Comentario</span>
              <p className="pl-5">“Tuvimos un inconveniente pero pudimos resolverlo”</p>
            </div>
          </div>
          <div className="divider" />
          <div>
            <p>Escrow privado #102212 - 20/06/2023</p>
            <div className="pl-5">
              <p>
                <span className="text-light-blue">Envió</span> Cripto{" "}
              </p>
              <p>
                <span className="text-light-blue">Recibió</span> Transferencia
                bancaria{" "}
              </p>
              <p className="text-gray">
                <span className="text-light-blue">Calificación </span>Neutral
              </p>
              <span className="text-light-blue">Comentario</span>
              <p className="pl-5">“Tuvimos un inconveniente pero pudimos resolverlo”</p>
            </div>
          </div>

        </section>
    </div>
  );
}
