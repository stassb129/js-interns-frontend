import css from './book.module.scss'
import Rating from "../rating/Rating";
import CustomDatePicker from "../custom-date-picker/CustomDatePicker";
import VerticalDelimiter from "../vertical-delimiter/VerticalDelimiter";
import Delimiter from "../delimiter/Delimiter";
import CustomSelect from "../custom-select/CustomSelect";
import Button from "../button/Button";
import {useState} from "react";
import PaymentModal from "../payment-modal/PaymentModal";

const BookPanel = ({price, rating, reviewsCount, amount, id, title}) => {
    const [activePaymentModal, setActivePaymentModal] = useState(false)

    const [chekIn, setChekIn] = useState(null)
    const [chekOut, setChekOut] = useState(null)
    const [guests, setGuests] = useState(1)


    const modalHandler = () => {
        setActivePaymentModal(!activePaymentModal)
    }
    const chekInHandler = (date) => {
        setChekIn(date)
    }
    const chekOutHandler = (date) => {
        setChekOut(date)
    }
    const guestsHandler = (guests) => {
        setGuests(guests)
    }

    console.log(
        chekIn,
        chekOut
    )

    return (
        <div className={css.panel}>
            <div className={css.title}>
                <div><span>{price}</span> / night</div>
                <Rating reviewsCount={reviewsCount}
                        rating={rating}/>
            </div>

            <Delimiter/>
            <div className={css.date}>
                <div className={css.check}>
                    <span>check-in</span>
                    <CustomDatePicker callback={chekInHandler} style={css.datePicker}/>
                </div>
                <VerticalDelimiter/>
                <div className={css.check}>
                    <span>check-out</span>
                    <CustomDatePicker callback={chekOutHandler} style={css.datePicker}/>
                </div>

            </div>

            <div className={css.guests}>
                <CustomSelect callback={guestsHandler} style={css.guests}/>
            </div>

            <Button click={modalHandler} style={css.bookBtn}>Book Now</Button>


            {activePaymentModal &&
            <PaymentModal active={activePaymentModal}
                          amount={amount}
                          title={title}
                          id={id}
                          chekIn={chekIn}
                          checkOut={chekOut}
                          guests={guests}
                          setActive={setActivePaymentModal}/>}
        </div>
    )
}

export default BookPanel