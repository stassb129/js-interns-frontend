import axios from "axios";

export const getCities = async (city) => {
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&city=${city}`)
    return res.data
}

//