import Image from "next/image";
import Link from "next/link";
import google from "../../../assets/login/google.svg";
import face from "../../../assets/login/face.svg";
import apple from "../../../assets/login/apple.svg";

export default function WithApps({mode}) {
  return (
    <div>
      <div className="flex items-center md:text-xs sm:text-[8px] mb-3">
        <hr className="border border-light-blue w-[82px] mr-2" />
        <span>Or {mode} with</span>
        <hr className="border border-light-blue w-[82px] ml-2" />
      </div>
      <div className="flex justify-center gap-5 ">
        <Link href="/">
          <Image src={google} alt="google" />
        </Link>
        <Link href="/">
          <Image src={face} alt="facebook" />
        </Link>
        <Link href="/">
          <Image src={apple} alt="apple" />
        </Link>
      </div>
    </div>
  );
}
