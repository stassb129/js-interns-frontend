import axios from "axios";


export const login = async (username, password) => {

    const res = await axios.post('/api/auth/login', {
        username,
        password
    })
    return res.data

}

export const register = async (username, password) => {

    const res = await axios.post('/api/auth/register', {
        username,
        password
    })
    return res.data

}