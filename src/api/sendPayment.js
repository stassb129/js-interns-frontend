import {postRequest} from "./api";


export const sendPayment = async (id, amount, roomId, description) => {
    try {
        const res = await postRequest('/api/payment', {
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