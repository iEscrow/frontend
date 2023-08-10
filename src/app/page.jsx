import Image from "next/image";
import Header from "./components/Home/Header";
import waves from "../assets/wave.svg"
export default function Home() {
  return (
    <>
    <main className='w-full min-h-screen'>
      <div className="
      min-h-[90vh] md:min-h-[70vh]
      p-10 md:pl-24 md:pt-20
      flex justify-center relative">
        <Header />
      </div>
      <Image src={waves} className="absolute w-full bottom-0" alt="waves"/>
    </main>
    </>
  );
}
