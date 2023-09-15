import axios from "axios"

export async function getUsers () {
    const {data} = await axios.get("http://3.22.169.23:3000/users")
    return data
}