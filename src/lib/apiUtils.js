import axios from "axios"

export const login = async (email, password) => {
    try {
        const response = await axios.get("json/store.json")
        const { data } = response
        const { users } = data
    
        const isAuth = users.find(el => (el.email === email && el.password === password))
        
        return isAuth ? true : false
    } catch (err) {
        console.log("Error: " + err)
        return false
    }
}