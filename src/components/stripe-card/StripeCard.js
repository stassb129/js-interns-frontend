import css from './stripeCard.module.scss'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {useDispatch, useSelector} from "react-redux";
import {fetchPayment, setStatus} from "../../redux/paymentSlice";
import {useEffect} from "react";
import Preloader from "../preloader/Preloader";
import SuccessSign from "../success-sign/SuccessSign";

const StripeCard = ({amount, roomId, description, chekIn, chekOut, guests}) => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    const paymentStatus = useSelector(state => state.payment.status)

    useEffect(() => {
        return () => {
            dispatch(setStatus(''))
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(setStatus('loading'))

        if (!stripe || !elements) {
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
                id,
                amount,
                description,
                metadata: {
                    chekIn,
                    chekOut,
                    guests,
                    roomId,
                }
            }
            dispatch(fetchPayment(data))
        }
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
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
            <button className={css.payBtn} type="submit" disabled={!stripe || paymentStatus !== ''}>
                {paymentStatus === "loading" ?
                    <Preloader style={css.loader}/> :
                    paymentStatus === 'success' ?
                        <SuccessSign/> :
                        paymentStatus === 'error' ?
                            <div>ERROR</div> : null}
                Pay
            </button>
        </form>
    )
}

export default StripeCard