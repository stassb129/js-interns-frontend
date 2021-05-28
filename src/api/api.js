import axios from "axios";

export const getRequest = async (url, params) => {
    const headers = {};
    const token = localStorage.getItem('token');
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.get(url, {headers, ...params});
    return response;
}

export const postRequest = async (url, params) => {
    const headers = {};
    const token = localStorage.getItem('token');
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.post(url, params, {headers});
    return response;
}


export const getProfile = async () => {
    const res = await getRequest(`http://localhost/api/profile`)
    return res.data
}