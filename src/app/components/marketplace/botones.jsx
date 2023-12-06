import Link from "next/link";

const Botones = ({ texto1, texto2, link1, link2 }) => {
  return (
    <div className="flex sm:justify-around w-full">
      <Link href={link1}>
        <button className="btn sm:btn-sm md:btn-md btn-neutral rounded-full">
          {texto1}
        </button>
      </Link>
      <Link href={link2}>
        <button className="btn sm:btn-sm md:btn-md btn-accent rounded-full">
          {texto2}
        </button>
      </Link>
    </div>
  );
};

export default Botones;
