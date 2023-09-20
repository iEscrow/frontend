import axios from "axios";

export async function getPriceCMC () {
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
    const headers = {
        "X-CMC_PRO_API_KEY": "38e79396-67b7-4207-9dfc-ea5b77e0eecc"
    }
 const {data} = await axios.get(url, {headers})
 return data
}