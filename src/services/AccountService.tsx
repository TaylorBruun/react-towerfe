import axios from "axios"

class AccountService {
    
  async getAccount() {
    const res = await axios.get("http://localhost:3000/account")
    return res.data
  }

  
}

export const accountService = new AccountService()
