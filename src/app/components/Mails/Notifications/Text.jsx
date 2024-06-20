import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col gap-6 text-black p-10 rounded-md">
      <div>
        <p className="font-semibold text-dark-blue">Solicitud de cambio de Condiciones</p>
        <p className="text-xs">
          Has pedido a (nombre de usuario) un cambio para las siguientes
          condiciones
        </p>
      </div>
      <div>
        <p className="font-semibold text-dark-blue">Comisión</p>
        <p className="font-semibold text-blue-2">0.0%</p>
        <p className="font-semibold text-dark-blue">cotización del dolar</p>
        <p className="font-semibold text-blue-2">$ar 205</p>
      </div>
      <div>
        <p className="font-medium text-dark-blue">
          {" "}
          Ya hemos contactado a tu contraparte para que realice los cambios
          solicitados
        </p>
      </div>
      <div>
        <p className="text-xs">
          {" "}
          Este es un mensaje automático, por favor no
          responder.
        </p>
      </div>
    </div>
  );
};

export default Text;
