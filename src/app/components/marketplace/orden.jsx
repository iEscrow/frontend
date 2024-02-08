import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.svg";
export default function Orden({ name, send, method, price = 300 }) {
  return (
    <div className="dark:bg-input-gay bg-white rounded-2xl flex md:p-4 shadow-md sm:p-3 justify-between md:h-[145px]">
      <div className=" flex flex-col md:justify-between md:w-[60%]">
        <div className="flex gap-2 max-md:pb-1">
          <Image src={profile} alt="profile" className="hidden dark:flex" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            className="dark:hidden"
          >
            <g filter="url(#filter0_d_4476_2497)">
              <rect x="2" y="1" width="20" height="20" rx="10" fill="#1B80A4" />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.67658 15.6844C5.57653 14.4351 4.90927 12.7956 4.90927 11.0002C4.90927 7.08398 8.08398 3.90927 12.0002 3.90927C15.9164 3.90927 19.0911 7.08398 19.0911 11.0002C19.0911 12.8188 18.4064 14.4776 17.2808 15.7327C17.1041 14.9965 16.7754 14.3026 16.3131 13.6968C15.7125 12.9098 14.9091 12.3011 13.989 11.936C14.5237 11.5152 14.9141 10.9383 15.1057 10.2854C15.2973 9.63249 15.2806 8.93611 15.058 8.29313C14.8353 7.65015 14.4179 7.09255 13.8636 6.69789C13.3093 6.30323 12.6458 6.09115 11.9654 6.09115C11.2849 6.09115 10.6214 6.30323 10.0671 6.69789C9.51285 7.09255 9.09536 7.65015 8.87274 8.29313C8.65012 8.93611 8.63345 9.63249 8.82504 10.2854C9.01663 10.9383 9.40696 11.5152 9.94172 11.936C9.02539 12.3031 8.22587 12.912 7.62838 13.6977C7.17778 14.2903 6.85483 14.9668 6.67658 15.6844ZM7.62857 16.5836C8.83309 17.528 10.3509 18.0911 12.0002 18.0911C13.6315 18.0911 15.1342 17.5402 16.3323 16.6143C16.3229 16.583 16.3163 16.5507 16.3126 16.5178C16.1929 15.4515 15.6844 14.4668 14.8845 13.7517C14.0846 13.0366 13.0492 12.6413 11.9763 12.6413C10.9033 12.6413 9.86794 13.0366 9.06802 13.7517C8.26809 14.4668 7.75967 15.4515 7.6399 16.5178C7.63745 16.54 7.63365 16.562 7.62857 16.5836ZM3.81836 11.0002C3.81836 6.48148 7.48148 2.81836 12.0002 2.81836C16.5189 2.81836 20.182 6.48148 20.182 11.0002C20.182 15.5189 16.5189 19.182 12.0002 19.182C7.48148 19.182 3.81836 15.5189 3.81836 11.0002ZM10.7532 11.181C11.112 11.4207 11.5338 11.5487 11.9654 11.5487C12.544 11.5487 13.099 11.3188 13.5081 10.9097C13.9173 10.5005 14.1472 9.94553 14.1472 9.36688C14.1472 8.93536 14.0192 8.51352 13.7795 8.15473C13.5397 7.79593 13.199 7.51628 12.8003 7.35114C12.4016 7.186 11.9629 7.1428 11.5397 7.22698C11.1165 7.31117 10.7277 7.51897 10.4226 7.8241C10.1174 8.12923 9.90964 8.518 9.82546 8.94123C9.74127 9.36446 9.78448 9.80315 9.94962 10.2018C10.1148 10.6005 10.3944 10.9413 10.7532 11.181Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_4476_2497"
                x="0.909091"
                y="0.454545"
                width="22.1818"
                height="22.1818"
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
                <feOffset dy="0.545455" />
                <feGaussianBlur stdDeviation="0.545455" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4476_2497"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4476_2497"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p className="text-sm">{name}</p>
        </div>
        <div className="md:pl-10 sm:pl-2 max-md:space-y-[-4px]">
          <div className="flex gap-5">
            <p className="dark:text-blue-2 font-semibold text-lg">ENVÍA</p>
            <p className="text-lg">{send}</p>
          </div>
          <div className="flex gap-5">
            <p className="dark:text-blue-2 font-semibold text-lg">PRECIO</p>
            <p className="text-lg">{price}</p>
          </div>
        </div>
        <div className="md:flex md:gap-4 max-md:pl-2 max-md:pb-2 gap-1">
          <p className=" dark:text-blue-2 font-semibold text-[10px]">Cerró precio con:</p>
          <p className="md:text-sm sm:text-[10px]">
            BITSTAMP + 4% = U$D ---,00
          </p>
        </div>
        <div className="flex gap-4 md:hidden">
          <div className="md:flex md:gap-4 max-md:pl-2 gap-1">
            <p className= "dark:text-blue-2 text-[10px]">Cotización Dolar</p>
            <p className="md:text-sm sm:text-lg">$ 280,00</p>
          </div>
          <div className="md:flex md:gap-4 max-md:pl-2 gap-1">
            <p className="dark:text-blue-2 text-[10px]">Método de pago</p>
            <p className="md:text-sm sm:text-[10px]">{method}</p>
          </div>
        </div>
      </div>
      <div className="  hidden md:flex flex-col gap-2 text-right">
        <div>
          <p className="dark:text-blue-2 text-[10px]">Cotización Dolar</p>
          <p className="text-lg">$ 280,00</p>
        </div>
        <div>
          <p className="dark:text-blue-2 text-[10px]">Método de pago</p>
          <p className="text-sm">{method}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-2 w-8 text-white flex flex-col justify-center items-center rounded-t-full rounded-b-full py-2 text-xs font-semibold space-y-[-4px] ">
          <p>C</p>
          <p>O</p>
          <p>M</p>
          <p>P</p>
          <p>R</p>
          <p>A</p>
          <p>R</p>
        </button>
      </div>
    </div>
  );
}
