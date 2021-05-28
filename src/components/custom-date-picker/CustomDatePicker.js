import css from './customDatePicker.module.scss'
import {forwardRef, useEffect, useState} from "react"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

const CustomDatePicker = ({style, callback}) => {
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (callback)
            callback(startDate)
    }, [startDate, setStartDate])

    const ExampleCustomInput = forwardRef(
        ({value, onClick}, ref) => (
            <button className={`${css.dateInput} ${style}`} onClick={onClick} ref={ref}>
                {value}
            </button>
        ),
    )
    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<ExampleCustomInput/>}
        />
    )
}

export default CustomDatePicker