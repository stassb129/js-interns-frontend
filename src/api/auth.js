import {postRequest} from "./api";


export const login = async (username, password) => {

    const res = await postRequest('/api/auth/login', {
        username,
        password
    })
    return res.data

}

export const register = async (username, password) => {

    const res = await postRequest('/api/auth/register', {
        username,
        password
    })
    return res.data

}