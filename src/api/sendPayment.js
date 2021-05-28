import {postRequest} from "./api";


export const sendPayment = async (id, amount, description, metadata) => {
    try {
        const res = await postRequest('/api/payment', {
            id,
            amount: amount * 100,
            description,
            metadata: {
                ...metadata
            }
        })
        return res.data

    } catch (e) {
        return e
    }

}