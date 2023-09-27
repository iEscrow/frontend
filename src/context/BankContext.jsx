"use client";
import { postBankAccount, getBankAccount } from "@/hooks/bankAccount/newBankAccount";
import { createContext, useContext, useEffect, useState } from "react";

export const AccountContext = createContext();

export const useAccount = () => {
  const context = useContext(AccountContext);
  return context;
};

export default function AcountProvider({ children }) {
  const [account, setAccount] = useState({
    Id: "",
    Bank_Id: "0",
    Account_Number: "",
    CBU: "",
    User_Id: "5",
  });
  
  const sendAccount = async () => {
    try {
      const data = await postBankAccount(account);
      if (data.status === "Success") {
        console.log("cuenta agregada correctamente");
      }
      // else {
      //     alert('No se ha podido agregar la cuenta')
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const getAccount = async () => {
    try {
      const data = await getBankAccount();
      if (data.status === "Success") {
        console.log(data);
      }
      // else {
      //     alert('No se ha podido agregar la cuenta')
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountContext.Provider value={{ sendAccount, getAccount, setAccount, account }}>
      {children}
    </AccountContext.Provider>
  );
}
