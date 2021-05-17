import axios from "axios";


export const getMapItems = async (coords) => {
    try {
        const res = await axios.post('/api/items', {
            leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
            rightTopCoords: [coords._northEast.lat, coords._northEast.lng]
        })
        return res.data

    } catch (e) {
        return e
    }

}
