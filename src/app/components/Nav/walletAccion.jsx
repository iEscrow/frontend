import logo from "../../../assets/logowallet.svg";
import Image from "next/image";

const WalletAccion = () => {
  return (
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
            <div className="flex w-full justify-between mt-4">
              <a href="/depositos/depositar">
                <button className="btn btn-xs w-[100px] btn-outline rounded-full">
                  DEPOSITAR
                </button>
              </a>
              <button className="btn btn-xs w-[100px] btn-accent rounded-full">
                RETIRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
};

export default WalletAccion;
