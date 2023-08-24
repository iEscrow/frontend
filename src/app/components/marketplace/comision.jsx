import React from "react";

export default function Comision() {
  return (
    <div className="flex flex-col gap-1">
      <p>% DE COMISIÓN</p>
      <div className="flex gap-x-3">
        <input type="text" className="input w-[86px] h-[36px] bg-[#2D2D2D]" />
        <div className="dropdown dropdown-hover dropdown-top cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M7.70018 3.9997H9.30042V5.59994H7.70018V3.9997ZM7.70018 7.20018H9.30042V12.0003H7.70018V7.20018ZM8.5 0C4.08389 0 0.5 3.58389 0.5 8C0.5 12.4161 4.08389 16 8.5 16C12.9161 16 16.5 12.4161 16.5 8C16.5 3.58389 12.9161 0 8.5 0ZM8.5 14.4004C4.97191 14.4004 2.09964 11.5281 2.09964 8C2.09964 4.47191 4.97191 1.59964 8.5 1.59964C12.0281 1.59964 14.9004 4.47191 14.9004 8C14.9004 11.5281 12.0281 14.4004 8.5 14.4004Z"
              fill="#F3AA64"
            />
          </svg>
          <p
            tabIndex={0}
            className=" dropdown-content menu w-[178px] rounded-md p-4 bg-dark-blue text-[10px]"
          >
            En caso de un porcentaje de descuento, puedes indicarlo anteponiendo
            “-” (resta) al porcentaje
          </p>
        </div>
      </div>
      <div className="divider"/>
      <p>USDT TOTAL</p>
      <div className="flex gap-x-3">
        <input type="text" className="input w-[172px] h-[36px] bg-[#2D2D2D]" />
        <div className="dropdown dropdown-hover dropdown-top cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M7.70018 3.9997H9.30042V5.59994H7.70018V3.9997ZM7.70018 7.20018H9.30042V12.0003H7.70018V7.20018ZM8.5 0C4.08389 0 0.5 3.58389 0.5 8C0.5 12.4161 4.08389 16 8.5 16C12.9161 16 16.5 12.4161 16.5 8C16.5 3.58389 12.9161 0 8.5 0ZM8.5 14.4004C4.97191 14.4004 2.09964 11.5281 2.09964 8C2.09964 4.47191 4.97191 1.59964 8.5 1.59964C12.0281 1.59964 14.9004 4.47191 14.9004 8C14.9004 11.5281 12.0281 14.4004 8.5 14.4004Z"
              fill="#F3AA64"
            />
          </svg>
          <p
            tabIndex={0}
            className=" dropdown-content menu w-[178px] rounded-md p-4 bg-dark-blue text-[10px]"
          >
            Si latransacción es mayor o igual A US$ 5000 el fee se reducirá a
            0.5%
          </p>
        </div>
      </div>
      <div className="text-sm ml-4">
        <p>Fee: 0.75%</p>
        <div className="flex gap-2">
          <p>RECIBIRÁS</p>
          <span className="text-yellow">0.0102 BTC</span>
        </div>
      </div>
    </div>
  );
}
