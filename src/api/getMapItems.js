import axios from "axios";


export const getMapItems = async (chords) => {
    const res = await axios.post('/api/pinktada-items', {
        leftBottomChords: [chords._southWest.lat, chords._southWest.lng],
        rightTopChords: [chords._northEast.lat, chords._northEast.lng]
    })
    return await res.data
}