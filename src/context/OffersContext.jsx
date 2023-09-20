'use client'
import { postOffer } from "@/hooks/Offers";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const OffersContext = createContext()

export const useOffer = () => {
    const context = useContext(OffersContext)
    return context
}

export default function OfferProvider ({children}) {
    const [offer, setOffer] = useState({
        Offer_id: 6,
        Type: 'Buy',
        Access: 'Private',
        Owner: 'Josue-prueba',
        Offer_DateTime: 63220923,
        Claim_Id: 0,
        Send: '',
        Receive: ''
    })
    const router = useRouter()
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

    return (
        <OffersContext.Provider value={{sendOffer, setOffer, offer}}>
            {children}
        </OffersContext.Provider>
    )
}