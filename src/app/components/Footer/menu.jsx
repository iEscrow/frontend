import button from "../../../assets/menubutton.svg";
import menu from "../../../assets/menu.svg";
import scrow from "../../../assets/misescrows.svg";
import Image from "next/image";
const Menu = () => {
  return (
    <div className="md:hidden flex w-full justify-evenly items-center h-14 bg-base-200 fixed bottom-0 left-0 right-0">
      <div className="flex flex-col items-center gap-1">
        <Image src={menu} alt="button" />
        <p className="text-[10px]">Marketplace</p>
      </div>
      <div className="flex flex-col -mt-8 relative  items-center gap-1">
        <Image src={button} alt="button" />
        <p className="text-[10px]">Crear escrow</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image src={scrow} alt="button" />
        <p className="text-[10px]">Mis escrows</p>
      </div>
    </div>
  );
};

export default Menu;
