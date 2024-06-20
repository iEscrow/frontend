'use client'
import Image from 'next/image'
import React from 'react'

export default function Reactivate() {
  return (
    <section className="flex flex-col gap-10 mb-10 max-md:px-4">
      <div className="md:px-24 max-md:flex justify-center">
        <Image
          src={require("@/assets/logo.svg")}
          className="w-[150px] md:w-[250px] hidden dark:flex"
          alt="logo"
        />
        <Image
          src={require("@/assets/logo-dark.svg")}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
      </div>
      <div className="md:px-24 md:space-y-4 md:w-2/4">
        <h1 className="md:text-4xl text-2xl  font-medium mb-64 ">
          Reactivar cuenta
        </h1>
        <div className="divider" />
        <div className="flex justify-between">
            <button  className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
                    Cancelar
            </button>
          <button onClick={()=>document.getElementById('reactivate_step1').showModal()} className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full">
            Reactivar
          </button>
        </div>
      </div>
    </section>
  )
}
