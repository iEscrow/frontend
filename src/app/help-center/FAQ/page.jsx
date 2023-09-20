"use client";
import { useState } from "react";
import { FAQS } from "./FAQ";
import Link from "next/link";

export default function AccountFuntions() {
  const FAQ = FAQS;
  const [msj, setMsj] = useState();
  const [btn, setBtn] = useState();
  const handleChange = (e) => {
    setMsj(e.target.value);
    setBtn()
  };
  return (
    <div className="flex gap-10 px-[200px]">
      <hr className="absolute border-light-blue left-[123px] top-[605px] w-[370px] -z-10 rotate-90" />
      <div className="flex flex-col gap-4 ">
        {FAQ.map((f) => (
          <div key={f.value} className="flex  gap-3">
            <input
              type="radio"
              name="radio-7"
              className="radio bg-blue radio-info"
              value={f.value}
              checked={msj === f.value}
              onChange={handleChange}
            />
            <p>{f.title}</p>
          </div>
        ))}
        <div className="py-8 flex flex-col gap-3 ">
          <h1>¿No encuentrás una respuesta?</h1>
          <p>contactate con nosotros y te contestaremos lo antes posible</p>
          <a href="mailto:soporte@iescrow.com" className="text-light-blue">
            soporte@iescrow.com
          </a>
        </div>
      </div>
      <div className="w-2/4 flex flex-col gap-10">
        {FAQ.map(
          (f) =>
            msj === f.value && (
              <div key={f.value}>
                <h1 className="text-lg text-light-blue">{f.subtitle}</h1>
                <p className="text-sm leading-loose">{f.msj}</p>
              </div>
            )
        )}
        {msj && (
          <div className="flex gap-2">
            <h1 className="text-sm">¿Te ha sido útil esta información?</h1>
            {!btn && (
              <>
                <button
                  className="text-light-blue underline"
                  onClick={() => setBtn("si")}
                >
                  Si
                </button>
                <span>-</span>
                <button
                  className="text-light-blue underline"
                  onClick={() => setBtn("no")}
                >
                  No
                </button>
              </>
            )}
            {btn === "si" && (
              <span className="text-light-blue">
                ✓ Gracias por el feedback!
              </span>
            )}
            {btn === "no" && (
              <>
                <p className="text-light-blue whitespace-pre-line">
                  Si lo deseas, puedes enviarnos una consulta utilizando nuestro
                  formulario de {" "}
                <Link href="/help-center/form" className="underline">contacto.</Link>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
