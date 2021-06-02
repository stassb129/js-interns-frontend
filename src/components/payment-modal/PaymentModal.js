import css from './paymentModal.module.scss'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCard from "../stripe-card/StripeCard";
import Modal from "../modal/Modal";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
console.log(process.env)

const PaymentModal = ({active, setActive, amount, id, title, chekIn, checkOut, guests}) => {

    return (
        <Modal active={active} style={css.modal} setActive={setActive}>
            <Elements stripe={stripePromise}>
                <StripeCard amount={amount}
                            description={title}
                            chekIn={chekIn}
                            chekOut={checkOut}
                            guests={guests}
                            roomId={id}/>
            </Elements>
        </Modal>
    )
}

export default PaymentModal