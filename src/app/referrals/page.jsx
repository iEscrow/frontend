import Image from "next/image";
import logoDark from "@/assets/logo-dark.svg";
import logo from "@/assets/logo.svg";
import Referral from "../components/Referral/Referral";
export default function Referrals() {
  const users = [
    {
      id: 123456,
      bonificacion: "0.0002 BTC",
      fecha: "2022/12/15 - 17:05 HS",
    },
    {
      id: 2345,
      bonificacion: "0.0002 BTC",
      fecha: "2022/12/15 - 17:05 HS",
    },
    {
      id: 45678,
      bonificacion: "0.0002 BTC",
      fecha: "2022/12/15 - 17:05 HS",
    },
    {
      id: 67890,
      bonificacion: "0.0002 BTC",
      fecha: "2022/12/15 - 17:05 HS",
    },
  ]
  return (
    <div className="flex flex-col gap-10 min-h-[90vh]">
      <div className="md:px-24 max-md:flex justify-center">
        <Image
          src={logo}
          className="w-[150px] md:w-[250px] hidden dark:flex"
          alt="logo"
        />
        <Image
          src={logoDark}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
      </div>
      <h1 className="md:text-4xl text-2xl  font-medium max-md:flex justify-center md:px-24">Sistema de referidos</h1>
      <div className="bg-input-gay md:px-24 px-4 py-4">
        <div className="flex md:gap-10">
          <div className="max-md:text-sm">
            <p className="text-light-blue">Comisiones ganadas</p>
            <p>0.0075 BTC</p>
          </div>
          <div className="max-md:text-sm">
            <p className="text-light-blue">Total amigos referidos</p>
            <p>4</p>
          </div>
          <div className="max-md:text-sm">
            <p className="text-light-blue">Ranking</p>
            <p>3456</p>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:gap-5 md:px-24 px-4 md:justify-between">
        <div>
          <h1 className="text-2xl max-md:text-center">Amigos</h1>
          <div className="overflow-x-auto">
            <table className="md:table table-sm">
              {/* head */}
              <thead>
                <tr>
                  <th>ID de usuario</th>
                  <th>Bonificación obtenida</th>
                  <th>Fecha de registro</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <th className="flex gap-2" >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      {u.id}
                    </th>
                    <td>{u.bonificacion}</td>
                    <td>{u.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
        <h1 className="text-2xl max-md:text-center">Historial de comisiones</h1>
          <div className="overflow-x-auto">
            <table className="md:table table-sm">
              {/* head */}
              <thead>
                <tr>
                  <th>ID de usuario</th>
                  <th>Comisión obtenida</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <th className="flex gap-2" >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      {u.id}
                    </th>
                    <td>{u.bonificacion}</td>
                    <td>{u.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Referral />
      </div>
    </div>
  );
}
