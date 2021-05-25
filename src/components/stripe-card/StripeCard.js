import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {sendPayment} from "../../api/sendPayment"
import {useDispatch} from "react-redux";
import {fetchPayment, setStatus} from "../../redux/paymentSlice";
import {useEffect} from "react";

const StripeCard = () => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setStatus())
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        })

        if (error) {
            console.log('[error]', error)
        } else {
            const {id} = paymentMethod
            const data = {
                id: id,
                amount: 21000,
                roomId: '6017d2dc0558000058006fc0'
            }
            dispatch(fetchPayment(data))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default StripeCard