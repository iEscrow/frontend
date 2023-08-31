import Image from "next/image";
import waves from "../assets/wave.svg";
import Header from "./components/Home/Header";
export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="min-h-[95vh] p-10 md:pl-24 pt-20 flex justify-center relative z-20">
          <Header />
        </div>
        <Image
          src={waves}
          className="absolute w-full -bottom-10"
          alt="waves"
        />
      </main>
    </>
  );
}
