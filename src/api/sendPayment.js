import axios from "axios";


export const sendPayment = async (id, amount, roomId, description) => {
    try {
        const res = await axios.post('/api/payment', {
            id,
            amount: amount * 100,
            metadata: {
                roomId,
                description
            }
        })
        return res.data

    } catch (e) {
        return e
    }

}