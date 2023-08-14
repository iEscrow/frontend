import Button from "@/app/components/login/button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.svg";
export default function ConfirmEmail() {
  return (
    <div className="w-full min-h-screen flex  flex-col justify-center items-center">
      <div className="w-[20%]">
      <div className="bg-blue w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className="bg-[#37d1f44f] text-white rounded-b-xl flex flex-col items-center px-[60px]">
        <h2 className="my-6 md:text-[24px] font-semibold">Almoust Done!</h2>
        <p className="text-center mb-3 text-[14px]">
          To complete the process, we need to confirm your Email adress. Please
          click the link in the email we just sent you
        </p>
        <h3 className="text-[14px]">Didn’t you get it?</h3>
        <Button mode="send again" path="/" />
        <Link href="/" className="my-6 text-[14px]">Confirm Later</Link>
      </div>
      </div>
    </div>
  );
}
