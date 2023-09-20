import axios from "axios"

export async function getOffers () {
    const {data} = await axios.get("http://3.22.169.23:3000/offers")
    return data
} 