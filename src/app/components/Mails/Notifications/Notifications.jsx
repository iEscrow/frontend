import Text from "./Text";
import logo from "../../../../assets/logo.svg";
import Image from "next/image";

const Notifications = () => {
  return (
    <div className="w-full md:h-[70vh] flex justify-center items-center">
      <div className="card w-[30%] bg-white shadow-xl text-center gap-2">
        <div className="card-body bg-dark-blue items-center rounded-md">
          <Image src={logo} alt="logo" className="w-[120px]" />
        </div>
        <Text />
        <p className="text-dark-blue">DESCARGAR APP iESCROW</p>
        <div className="bg-green opacity-60 flex justify-center gap-4 p-2">
          <h1 className="text-dark-blue font-semibold">Google Play</h1>
          <p>|</p>
          <h1 className="text-dark-blue font-semibold">APP Store</h1>
        </div>
        <div>
          <p className="text-xs text-blue-2">URL: www.iescrow.crypto</p>
          <p className="text-xs text-blue-2">Email: support@iescrow.crypto</p>
          <p className="text-xs text-blue-2">
            © 2023 iEscrow.crypto Derechos Reservados
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
