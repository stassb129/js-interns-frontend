import axios from "axios";

export const get = (url, params) => {

}

export const post = () => {

}

const accessToken = localStorage.getItem('token')

console.log(accessToken)

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic3RhcyIsImlhdCI6MTYyMjEyMTkxMSwiZXhwIjoxNjIyMTIyMDMxfQ.SgyjyqiHSJdcPXJT_LFXLiqnokmk0Ck966hA0pPuBwc`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


export const getProfile = async (city) => {
    const res = await axios.get(`http://localhost/api/profile`)
    return res.data
}

//



