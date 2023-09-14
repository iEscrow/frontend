import campana from "../../../assets/campana.svg";
import logo from "../../../assets/logowallet.svg";
import Image from "next/image";
import Link from "next/link";

const Userlog = () => {
  return (
    <div>
      <ul className="menu menu-horizontal flex justify-center items-center gap-x-2 p-2">
        <li>
          <Link href={"/marketplace"}>MARKETPLACE</Link>
        </li>
        <li>
          <Link href={"/"}>ESCROWS</Link>
        </li>
        <li>
          <button className="btn btn-sm btn-outline btn-accent rounded-full">
            CREAR SCROW
          </button>
        </li>
        <li>
          <Image src={campana} alt="campana" />
        </li>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" className="avatar">
            <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
              <img
                src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
                alt="user"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            className="mt-4 dropdown-content z-[100] menu p-2 shadow bg-base-100  rounded-b-xl w-52"
          >
            <li>
              <a className="cursor-pointer hover:bg-green">MI PERFIL</a>
            </li>
            <li>
              <a className="cursor-pointer hover:bg-green">FAQ{`'`}S</a>
            </li>
            <li>
              <a className="hover:bg-green">AYUDA</a>
            </li>
            <li>
              <a className="hover:bg-green">REFERIDOS</a>
            </li>
            <li>
              <details className="dropdown dropdown-left">
                <summary className="">WALLET</summary>
                <div className="dropdown-content card card-compact w-64 rounded-b-xl bg-dark-blue text-primary-content mr-[13px] mt-[-185px]">
                  <div className="flex items-center justify-center gap-2 h-10 w-full bg-gradient-to-r from-[#13E5C0] from-19% via-[#5D98F0] via-74% to-[#E020F1] to-88%">
                    <Image src={logo} alt="campana" />
                    <p>Billetera iEscrow </p>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col">
                      <div>
                        <p>Total Balance</p>
                        <p>≈ $ 1.725 USD</p>
                      </div>
                      <div className="divider m-0" />
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p>ETH</p>
                          <p>Ethereum</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p>2.35</p>
                          <p>≈ $ 4548</p>
                        </div>
                      </div>
                      <div className="divider m-0" />
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p>ETH</p>
                          <p>Ethereum</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p>2.35</p>
                          <p>≈ $ 4548</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <a className="hover:bg-green">CERRAR SESIÓN</a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Userlog;

{
  /* <div className="card-body">
  <div className="card-title flex items-center justify-center gap-2">
    <Image src={logo} alt="campana" />
    <p>Billetera iEscrow </p>
  </div>
  <div className="flex flex-col">
    <div>
      <p>Total Balance</p>
      <p>≈ $ 1.725 USD</p>
    </div>
    <div className="divider m-0" />
    <div className="flex justify-between">
      <div className="flex flex-col">
        <p>ETH</p>
        <p>Ethereum</p>
      </div>
      <div className="flex flex-col items-end">
        <p>2.35</p>
        <p>≈ $ 4548</p>
      </div>
    </div>
  </div>
</div>; */
}
