import {postRequest} from "./api";


export const getMapItems = async (coords) => {
    try {
        const res = await postRequest('/api/items', {
            leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
            rightTopCoords: [coords._northEast.lat, coords._northEast.lng]
        })
        return res.data

    } catch (e) {
        return e
    }
}
