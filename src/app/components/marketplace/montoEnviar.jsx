import React from 'react'

export default function MontoEnviar() {
  return (
    <div className="flex flex-col  w-[50%] gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-white -mb-1 ">Monto a Enviar</p>
              <p className="text-light-blue text-sm">Moneda local</p>
            </div>
            <input type="text" className="input w-[172px] h-[36px] bg-white" />
          </div>
          <div className="flex items-center justify-between">
            <p>Cotización Dolar</p>
            <input type="text" className="input w-[172px] h-[36px] bg-white" />
          </div>
        </div>
  )
}
