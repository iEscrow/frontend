import Image from "next/image";
import logo from "../../../assets/logo.svg";
import Button from "@/app/components/login/button";
import mail from "@/assets/login/mail.svg";
import Link from "next/link";
export default function AccountRecovery() {
  return (
    <div className="w-full min-h-screen flex  flex-col justify-center items-center">
      <div className="md:w-[20%] sm:w-[90%]">
        <div className="bg-gradient-to-r from-[#171717]  to-[#272727] w-full flex justify-center py-5 rounded-t-xl">
          <Image width={144} height={62.4} src={logo} alt="logo" />
        </div>
        <div className="bg-input-gay text-white rounded-b-xl flex flex-col items-center px-[60px]">
          <h2 className="my-6 md:text-[24px] font-semibold">
            Account Recovery
          </h2>
          <p className="text-center mb-3 text-[14px]">
            Did you forget your password?
          </p>
          <p className="text-center mb-5 text-[14px]">
            That’s ok, we will help you recover it. Just fill your Email and
            we`ll send you a link to reset your password
          </p>
          <div className="flex w-full">
            <Image src={mail} className="absolute my-4 ml-4" alt="mail" />
            <input
              className="bg-[#414141] border-none rounded py-3 mb-4 w-full pl-11 focus:outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-10">
            <Button mode="send" path="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
