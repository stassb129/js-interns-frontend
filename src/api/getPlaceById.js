import axios from "axios";


export const getPlaceById = async (id) => {

    const res = await axios.get(`/api/items/${id}`)
    return res.data

}
