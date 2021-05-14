import axios from "axios";


export const getPlaces = async (coords, sort, page = 1) => {

    const res = await axios.get('/api/pinktada-items/getPlaces', {
        params: {
            leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
            rightTopCoords: [coords._northEast.lat, coords._northEast.lng],
            sort: {
                ...sort
            },
            page: page
        }
    })
    return res.data

}
