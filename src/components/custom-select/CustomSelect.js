import css from './customSelect.module.scss'
import {useState} from "react";

const CustomSelect = () => {
    const [value, setValue] = useState("1")

    const selectHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <select className={css.select}
                onChange={selectHandler}
                value={value}
                name="guests"
                id="">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
        </select>
    )
}

export default CustomSelect