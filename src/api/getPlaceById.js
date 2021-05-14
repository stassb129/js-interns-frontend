import axios from "axios";


export const getPlaceById = async (id) => {

    const res = await axios.get('/api/pinktada-items/findById/id', {
        params: {
            id: id
        }
    })
    return res.data

}
