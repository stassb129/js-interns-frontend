import css from './customSelect.module.scss'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBeds} from "../../redux/placesSlice";

const CustomSelect = ({style}) => {
    const dispatch = useDispatch()
    const beds = useSelector(state => state.places.sort.beds)

    // const [value, setValue] = useState(beds)

    const selectHandler = (e) => {
        dispatch(setBeds(e.target.value))
    }

    return (
        <select className={`${css.select} ${style}`}
                onChange={selectHandler}
                value={beds}
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