import React from 'react'

const EliminarWallet = () => {
  return (
    <>
      <input type="checkbox" id="modal_eliminar_wallet" className="modal-toggle" />
      <div className="modal  modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-2 w-full">
            <b className="text-center">ELIMINAR WALLET</b>
            
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