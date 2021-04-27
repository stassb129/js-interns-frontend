import axios from "axios";


export const getMapItems = async (coords) => {
    const res = await axios.post('/api/pinktada-items', {
        leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
        rightTopCoords: [coords._northEast.lat, coords._northEast.lng]
    })
    return await res.data
}