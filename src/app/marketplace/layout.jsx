import logoDark from "@/assets/logo-dark.svg";
import logo from "@/assets/logo.svg";
import Image from "next/image";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center w-full p-4">
      <div className="backdrop-opacity-10 bg-white/10 sm:w-full lg:w-9/12 xl:w-[60%] 2xl:w-[40%] sm:p-4 md:p-10 rounded-2xl flex flex-col justify-center items-center">
        <div className="justify-center p-6">
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
        {children}
      </div>
    </div>
  );
};
export default Layout;
