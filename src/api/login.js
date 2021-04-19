import axios from "axios";


export const login = async (username, password) => {
    const res = await axios.post('/auth/login', {
        username,
        password
    })
    console.log(res)
}