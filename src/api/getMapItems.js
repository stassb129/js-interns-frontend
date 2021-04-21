import axios from "axios";


export const getMapItems = async (chords) => {
    const res = await axios.post('/api/pinktada-items', {
        leftBottomChords: [38.747417, -78.113175],
        rightTopChords: [38.756243, -78.105901]
    })
    return res.data
}