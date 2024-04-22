import React from "react";

const AgregarWallet = () => {
  return (
    <>
      <input
        type="checkbox"
        id="modal_agregar_wallet"
        className="modal-toggle"
      />
      <div className="modal modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-6 w-full">
            <b className="text-center">AGREGAR WALLET</b>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input w-full"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full"
                />
                <select className="select w-full">
                  <option>UTC</option>
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full "
              />
              <select className="select w-full">
                <option>UTC</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>
            <div className="flex w-full justify-around">
              <button className="btn btn-sm btn-neutral rounded-full">
                <label
                  htmlFor="modal_agregar_wallet"
                  className="cursor-pointer w-full"
                >
                  cancelar
                </label>
              </button>
              <button className="btn btn-sm btn-accent rounded-full">
                <label
                  htmlFor="modal_agregar_wallet"
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
          htmlFor="modal_agregar_wallet"
        />
      </div>
    </>
  );
};

export default AgregarWallet;
