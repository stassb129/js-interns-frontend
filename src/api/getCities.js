import {getRequest} from "./api";

export const getCities = async (city) => {
    const res = await getRequest(`https://nominatim.openstreetmap.org/search?format=json&city=${city}`)
    return res.data
}

//