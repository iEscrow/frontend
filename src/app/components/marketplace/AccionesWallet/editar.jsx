import React from "react";

const EditarWallet = () => {
  return (
    <>
      <input
        type="checkbox"
        id="modal_editar_wallet"
        className="modal-toggle"
      />
      <div className="modal  modal-middle">
        <div className="modal-box glass text-center">
          <b>EDITAR WALLET</b>
          <div className="flex flex-col gap-2 w-full">
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
        </div>
        <label
          className="modal-backdrop backdrop-blur-[2px]"
          htmlFor="modal_editar_wallet"
        />
      </div>
    </>
  );
};

export default EditarWallet;
