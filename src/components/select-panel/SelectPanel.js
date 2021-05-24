import css from './selectPanel.module.scss'
import CustomDatePicker from "../custom-date-picker/CustomDatePicker"
import Button from "../button/Button"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import SearchCities from "../search-cities/SearchCities";
import {setCenterCoords} from "../../redux/mapItemsSlice";
import {useDispatch} from "react-redux";
import BookPanel from "../book-panel/BookPanel";
import CustomSelect from "../custom-select/CustomSelect";

const Select = ({title, icon, children}) => {
    return (
        <div className={css.select}>
            <i className={`${icon} ${css.icon}`}></i>
            <div className={css.description}>
                <span className={css.title}>{title}</span>
                <div className={css.child}>{children}</div>
            </div>
        </div>
    )
}

const SelectPanel = () => {
    const dispatch = useDispatch()
    const [enterCity, setEnterCity] = useState(null)

    const searchHandler = () => {
        dispatch(setCenterCoords(enterCity))
    }
    return (
        <div className={css.selectPanel}>
            <Select title="Location"
                    icon='icon-search'>

                <SearchCities setEnterCity={setEnterCity}/>
            </Select>
            <Select title="Start date"
                    icon='icon-calendar'>
                <CustomDatePicker/>
            </Select>
            <Select title="End date"
                    icon='icon-calendar'>
                <CustomDatePicker/>
            </Select>
            <Select title="Bedroom"
                    icon='icon-bed'>
                <CustomSelect/>
            </Select>


            <Button style={css.searchBtn}>
                <Link onClick={searchHandler} to="/homes">
                    <i className="icon-search"></i>
                </Link>
            </Button>
        </div>
    )
}

export default SelectPanel