'use client'
import { getOffers, postOffer } from "@/hooks/Offers";
import { getBankAccount, postBankAccount } from "@/hooks/bankAccount/newBankAccount";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext()

export const useApp = () => {
    const context = useContext(Context)
    return context
}

export default function Provider ({children}) {
    const [offer, setOffer] = useState({
        Offer_id: null,
        Type: 'Buy',
        Access: '',
        Owner: 'prueba',
        Offer_DateTime: 63220923,
        Claim_Id: 0,
        Send: '',
        Receive: ''
    })
    const [account, setAccount] = useState({
        Id: "",
        Bank_Id: "0",
        Account_Number: "",
        CBU: "",
        User_Id: "5",
      });
    const router = useRouter()
    const getOffer = async () =>{
        try {
            const {Offers} = await getOffers()
            if(Offers.length){
                setOffer({...offer, Offer_id: Offers.length + 1 })
            }
        } catch (error) {
            console.log(error)        }
    }
    const sendOffer = async () => {
        try {
            const data = await postOffer(offer)
            if(data.status === 'Success'){
                router.push('/marketplace/vender-cripto/publicar')
            } 
            // else {
            //     alert('No se ha podido publicar el escrow, vuelve a intew')
            // }
        } catch (error) {
            console.log(error);
        }
    }
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
    
    useEffect(()=> {
        getOffer()
    },[])
    return (
        <Context.Provider value={{sendOffer, setOffer, offer, sendAccount, getAccount, setAccount, account}}>
            {children}
        </Context.Provider>
    )
}