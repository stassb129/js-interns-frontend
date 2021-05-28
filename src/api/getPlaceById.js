import {getRequest} from "./api";


export const getPlaceById = async (id) => {

    const res = await getRequest(`/api/items/${id}`)
    return res.data

}
