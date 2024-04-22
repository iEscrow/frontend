import React from 'react'

const EliminarWallet = () => {
  return (
    <>
      <input
        type="checkbox"
        id="modal_eliminar_wallet"
        className="modal-toggle"
      />
      <div className="modal  modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-6 w-full">
            <div className="text-center">
              <b>ELIMINAR WALLET</b>
              <p>¿Estás seguro que deseas eliminar esta wallet?</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="flex flex-col">
                <b className="text-green">Titular:</b>
                <p>Facundo salas</p>
              </div>
              <div className="flex flex-col">
                <b className="text-green">Nombre:</b>
                <p>iEscrow</p>
              </div>
              <div className="flex flex-col">
                <b className="text-green">NRO:</b>
                <p>0xj865ece9mwJKdPB5Kbhv4JiS</p>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <button className="btn btn-sm btn-neutral rounded-full">
                <label
                  htmlFor="modal_eliminar_wallet"
                  className="cursor-pointer w-full"
                >
                  cancelar
                </label>
              </button>
              <button className="btn btn-sm btn-accent rounded-full">
                <label
                  htmlFor="modal_eliminar_wallet"
                  className="cursor-pointer w-full"
                >
                  confirmar
                </label>
              </button>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop backdrop-blur-[2px]"
          htmlFor="modal_eliminar_wallet"
        />
      </div>
    </>
  )
}

export default EliminarWallet