import logo from "../../assets/logo.svg";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full px-20 pb-20 flex flex-col sm:gap-6 md:gap-20">
      <div className="w-[15%]">
        <a href="/">
          <Image src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center h-auto ">
        {children}
      </div>
    </div>
  );
};

export default layout;
