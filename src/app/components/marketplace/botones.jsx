import Link from "next/link";

const Botones = ({ texto1, texto2, link1, link2 }) => {
  return (
    <div className="flex sm:justify-around w-full">
      <Link href={link1}>
        <button className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
          {texto1}
        </button>
      </Link>
      <Link href={link2}>
        <button className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full">
          {texto2}
        </button>
      </Link>
    </div>
  );
};

export default Botones;
