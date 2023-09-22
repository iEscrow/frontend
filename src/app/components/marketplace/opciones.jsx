import Image from "next/image";
import delet from "../../../assets/btn-delete.svg";
import edit from "../../../assets/btn-edit.svg";
import more from "../../../assets/more-vertical.svg";
const Opciones = ({ accion }) => {
  return (
    <div className="dropdown sm:dropdown-left md:dropdown-right">
      <button tabIndex={0} className="btn btn-ghost">
        <Image src={more} className="w-[20px] md:w-[20px]" alt="more" />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu md:p-2 shadow bg-[#414141] rounded-lg sm:w-22 md:w-52 text-white uppercase"
      >
        <label
          htmlFor={
            accion === "cuenta" ? "modal_editar_cuenta" : "modal_editar_wallet"
          }
        >
          <li>
            <div className="flex justify-center">
              <Image src={edit} alt="edit" />
              <a>Editar</a>
            </div>
          </li>
        </label>
        <label
          htmlFor={
            accion === "cuenta" ? "modal_eliminar_cuenta" : "modal_eliminar_wallet"
          }
        >
          <li>
            <div className="flex justify-center">
              <Image src={delet} alt="delete" />
              <a>Eliminar</a>
            </div>
          </li>
        </label>
      </ul>
    </div>
  );
};

export default Opciones;
