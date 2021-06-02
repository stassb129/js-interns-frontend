import css from './customDatePicker.module.scss'
import {forwardRef, useEffect, useState} from "react"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

const ExampleCustomInput = forwardRef(
    ({value, onClick, style}, ref) => (
        <button className={`${css.dateInput} ${style}`} onClick={onClick} ref={ref}>
            {value}
        </button>
    ),
)

const CustomDatePicker = ({style, callback}) => {
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (callback)
            callback(startDate)
    }, [startDate, setStartDate])

    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<ExampleCustomInput style={style}/>}
        />
    )
}

export default CustomDatePicker