import axios from "axios"

export async function postBankAccount (account) {
  const {data} = await axios.post("http://3.22.169.23:3000/bank-account", account)
  return data
} 

export async function getBankAccount () {
  const {data} = await axios.get("http://3.22.169.23:3000/bank-account")
  return data
} 