import axios from "axios";


export const getPlaces = async (coords) => {
    try {
        const res = await axios.get('/api/pinktada-items/getPlaces', {
            params: {
                leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
                rightTopCoords: [coords._northEast.lat, coords._northEast.lng]
            }
        })
        return res.data

    } catch (e) {
        return e
    }

}
