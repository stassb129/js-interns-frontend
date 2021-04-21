import axios from "axios";


export const login = async (username, password) => {
    const res = await axios.post('/api/auth/login', {
        username,
        password
    })
    console.log(res)
}