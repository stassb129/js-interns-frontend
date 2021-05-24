import css from './book.module.scss'
import Rating from "../rating/Rating";
import CustomDatePicker from "../custom-date-picker/CustomDatePicker";
import VerticalDelimiter from "../vertical-delimiter/VerticalDelimiter";
import Delimiter from "../delimiter/Delimiter";
import CustomSelect from "../custom-select/CustomSelect";
import Button from "../button/Button";

const BookPanel = ({price, rating, reviewsCount}) => {

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
                    <CustomDatePicker style={css.datePicker}/>
                </div>
                <VerticalDelimiter/>
                <div className={css.check}>
                    <span>check-out</span>
                    <CustomDatePicker style={css.datePicker}/>
                </div>

            </div>

            <div className={css.guests}>
                <CustomSelect/>
            </div>

            <Button style={css.bookBtn}>Book Now</Button>


        </div>
    )
}

export default BookPanel