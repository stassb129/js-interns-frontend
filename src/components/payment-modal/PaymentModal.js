import css from './paymentModal.module.scss'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCard from "../stripe-card/StripeCard";
import Modal from "../modal/Modal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {setStatus} from "../../redux/paymentSlice";

const stripePromise = loadStripe('pk_test_51IuvNqEo4u7eYIVbE5NsXubSFYsJKdvDLz23lGWNAlKgl7Lv9AkR5KiCZClzK7YUBMVrh7jFCFwSRL3zv710PfVt002T3FZsfg');

const PaymentModal = () => {
    const dispatch = useDispatch()
    const paymentStatus = useSelector(state => state.payment.status)
    const [activeModal, setActiveModal] = useState(true)


    return (
        <Modal active={activeModal} setActive={setActiveModal}>
            <Elements stripe={stripePromise}>
                <StripeCard/>
            </Elements>

            {paymentStatus === "loading" ?
                <div>Loading...</div> :
                paymentStatus === 'success' ?
                    <div>success</div> :
                    paymentStatus === 'error' ?
                        <div>ERROR</div> : null
            }
        </Modal>
    )
}

export default PaymentModal