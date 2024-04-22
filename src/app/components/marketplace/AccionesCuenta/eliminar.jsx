import React from "react";

const EliminarCuenta = () => {
  return (
    <>
      <input
        type="checkbox"
        id="modal_eliminar_cuenta"
        className="modal-toggle"
      />
      <div className="modal  modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-6 w-full">
            <div className="text-center">
              <b>ELIMINAR CUENTA BANCARIA</b>
              <p>¿Estás seguro que deseas eliminar esta cuenta?</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="flex flex-col">
                <b className="text-green">Titular:</b>
                <p>Facundo salas</p>
              </div>
              <div className="flex flex-col">
                <b className="text-green">Nro de cuenta:</b>
                <p>3216XXXXXXXXX4351</p>
              </div>
              <div className="flex flex-col">
                <b className="text-green">CBU:</b>
                <p>0000321XXXXX4684351</p>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <button className="btn btn-sm btn-neutral rounded-full">
                <label
                  htmlFor="modal_eliminar_cuenta"
                  className="cursor-pointer w-full"
                >
                  cancelar
                </label>
              </button>
              <button className="btn btn-sm btn-accent rounded-full">
                <label
                  htmlFor="modal_eliminar_cuenta"
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
          htmlFor="modal_eliminar_cuenta"
        />
      </div>
    </>
  );
};

export default EliminarCuenta;
