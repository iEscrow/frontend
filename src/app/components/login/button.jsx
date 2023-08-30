import Link from "next/link";

export default function Button ({mode, path}) {
    return (
        <Link href={path}>
        <button className="bg-blue-2 py-2 px-14 rounded-[22px] font-bold shadow-xl mt-7 mb-2 uppercase">
          {mode}
        </button>
        </Link>
    )
}