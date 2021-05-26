import css from './paymentModal.module.scss'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCard from "../stripe-card/StripeCard";
import Modal from "../modal/Modal";

const stripePromise = loadStripe('pk_test_51IuvNqEo4u7eYIVbE5NsXubSFYsJKdvDLz23lGWNAlKgl7Lv9AkR5KiCZClzK7YUBMVrh7jFCFwSRL3zv710PfVt002T3FZsfg');

const PaymentModal = ({active, setActive, amount, id, title}) => {

    return (
        <Modal active={active} style={css.modal} setActive={setActive}>
            <Elements stripe={stripePromise}>
                <StripeCard amount={amount} description={title} roomId={id}/>
            </Elements>
        </Modal>
    )
}

export default PaymentModal