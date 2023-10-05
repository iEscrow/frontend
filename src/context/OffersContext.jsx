'use client'
import { getOffers, postOffer } from "@/hooks/Offers";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const OffersContext = createContext()

export const useOffer = () => {
    const context = useContext(OffersContext)
    return context
}

export default function OfferProvider ({children}) {
    const [offer, setOffer] = useState({
        Offer_id: null,
        Type: 'Buy',
        Access: '',
        Owner: 'Josue-prueba',
        Offer_DateTime: 63220923,
        Claim_Id: 0,
        Send: '',
        Receive: ''
    })
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
    useEffect(()=> {
        getOffer()
    },[])
    return (
        <OffersContext.Provider value={{sendOffer, setOffer, offer}}>
            {children}
        </OffersContext.Provider>
    )
}