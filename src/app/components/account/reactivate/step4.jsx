"use client";
import { useState } from 'react';
import {documento} from './documento'
export const Step4 = () => {
  const [select, setSelect] = useState()
  return (
    <dialog
      id="reactivate_step4"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-20 border-2 border-blue-2">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-center font-semibold">
          Verificación de seguridad
        </h3>
        <p className="text-xs sm:text-sm pt-4 pb-6">
          Para garantizar la seguridad de su cuenta, por favor complete la
          siguiente verificación.
        </p>
        <form className="px-6 flex flex-col gap-6" >
          <label className="space-y-2 px-10">
            <p className="text-light-blue">País de residencia</p>
            <select className="w-full p-3 rounded-md" >
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Perú">Perú</option>
            </select>
          </label>
          <div className="flex flex-col gap-3">
            {documento.map(doc => (
              <div onClick={()=>setSelect(doc.id)} key={doc.id} className={` cursor-pointer flex border  items-center gap-2 text-sm p-3 rounded-md ${select === doc.id ? 'border-2 border-blue-2 text-blue-2' : ' border-gray' }`}>
                <doc.icono />
                {doc.tipo}
              </div>
            ))}
          </div>
        </form>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button onClick={() => document.getElementById("reactivate_step3").showModal()} className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
              Atras
            </button>
            <button onClick={() => document.getElementById("reactivate_step5").showModal()}
              className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
