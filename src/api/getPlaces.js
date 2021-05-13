import axios from "axios";


export const getPlaces = async (coords, page = 1) => {

    const res = await axios.get('/api/pinktada-items/getPlaces', {
        params: {
            leftBottomCoords: [coords._southWest.lat, coords._southWest.lng],
            rightTopCoords: [coords._northEast.lat, coords._northEast.lng],
            sort: {
                upPrice: false,
                downPrice: false,
                upRate: false
            },
            page: page
        }
    })
    return res.data

}
