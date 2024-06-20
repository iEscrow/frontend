import Image from "next/image";
export default function layout({ children }) {
  return (
    <div className="flex flex-col  px-2 sm:px-4  md:px-8 lg:px-16   pb-14 gap-8">
        <div>
        <Image
          src={require('@/assets/logo.svg')}
          className="w-[150px] md:w-[250px] hidden dark:flex"
          alt="logo"
        />
        <Image
          src={require('@/assets/logo-dark.svg')}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">About us</h1>
      <div className="dark:backdrop-opacity-10 dark:bg-white/10 bg-gray/10 w-full py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 rounded-2xl flex md:justify-center">
        {children}
      </div>
    </div>
  );
}
