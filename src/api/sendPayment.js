import axios from "axios";


export const sendPayment = async (id, amount, roomId) => {
    try {
        const res = await axios.post('/api/payment', {
            id,
            amount,
            metadata: {
                roomId
            }
        })
        return res.data

    } catch (e) {
        return e
    }

}