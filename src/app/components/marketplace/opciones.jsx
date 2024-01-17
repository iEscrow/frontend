import Image from "next/image";
import delet from "../../../assets/btn-delete.svg";
import edit from "../../../assets/btn-edit.svg";
import more from "../../../assets/more-vertical.svg";
const Opciones = ({ accion }) => {
  return (
    <div className="dropdown sm:dropdown-left md:dropdown-right">
      <button tabIndex={0} className="btn btn-ghost">
        <Image
          src={more}
          className="w-[20px] md:w-[20px] hidden dark:flex"
          alt="more"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="dark:hidden"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="#02284A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="#02284A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="#02284A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu md:p-2 shadow dark:bg-[#414141] bg-white rounded-lg sm:w-22 md:w-52 dark:text-white uppercase"
      >
        <label
          htmlFor={
            accion === "cuenta" ? "modal_editar_cuenta" : "modal_editar_wallet"
          }
        >
          <li>
            <div className="flex justify-center">
              <Image src={edit} alt="edit" className="hidden dark:flex" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                className="dark:hidden"
              >
                <path
                  d="M8.99951 16.2183H16.9992"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9996 1.55227C13.3532 1.19866 13.8328 1 14.3329 1C14.5805 1 14.8257 1.04877 15.0544 1.14353C15.2832 1.23829 15.4911 1.37718 15.6662 1.55227C15.8412 1.72736 15.9801 1.93522 16.0749 2.16398C16.1697 2.39275 16.2184 2.63794 16.2184 2.88555C16.2184 3.13317 16.1697 3.37836 16.0749 3.60712C15.9801 3.83589 15.8412 4.04375 15.6662 4.21884L4.55543 15.3296L1 16.2184L1.88886 12.663L12.9996 1.55227Z"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>Editar</a>
            </div>
          </li>
        </label>
        <label
          htmlFor={
            accion === "cuenta"
              ? "modal_eliminar_cuenta"
              : "modal_eliminar_wallet"
          }
        >
          <li>
            <div className="flex justify-center">
              <Image src={delet} alt="delete" className="hidden dark:flex" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                className="dark:hidden"
              >
                <path
                  d="M4.99863 4.2V2.6C4.99863 2.17565 5.1672 1.76869 5.46726 1.46863C5.76732 1.16857 6.17429 1 6.59863 1H9.79863C10.223 1 10.6299 1.16857 10.93 1.46863C11.2301 1.76869 11.3986 2.17565 11.3986 2.6V4.2M13.7986 4.2V15.4C13.7986 15.8243 13.6301 16.2313 13.33 16.5314C13.0299 16.8314 12.623 17 12.1986 17H4.19863C3.77429 17 3.36732 16.8314 3.06726 16.5314C2.7672 16.2313 2.59863 15.8243 2.59863 15.4V4.2H13.7986Z"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.7998 8.2002V13.0002"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.6001 8.2002V13.0002"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 4.2002H2.6H15.4"
                  stroke="#02284A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>Eliminar</a>
            </div>
          </li>
        </label>
      </ul>
    </div>
  );
};

export default Opciones;
