import React from 'react'

export default function Replicar() {
  return (
    <>
      <input
        type="checkbox"
        id="modal_btn_replicar"
        className="modal-toggle"
      />
      <div className="modal  modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-6 w-full">
            <b className="text-center">Replicar</b>
            <div className="flex gap-2 justify-center">
              <p>Puedes ejercer a continuación tu derecho a réplica relacionado al escrow #102216</p>
            </div>
            <textarea name="" id="" cols="1" rows="5" placeholder='Escribe un comentario' className='rounded p-3'></textarea>
            <div className="flex w-full justify-around">
              <button className="btn btn-sm btn-neutral rounded-full">
                <label
                  htmlFor="modal_btn_replicar"
                  className="cursor-pointer w-full"
                >
                  cancelar
                </label>
              </button>
              <button className="btn btn-sm btn-accent rounded-full">
                <label
                  htmlFor="modal_btn_replicar"
                  className="cursor-pointer w-full"
                >
                  Enviar
                </label>
              </button>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop backdrop-blur-[2px]"
          htmlFor="modal_btn_replicar"
        />
      </div>
    </>
  )
}
