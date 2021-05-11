import css from './selectPanel.module.scss'
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker"
import Button from "../Button/Button"
import {Link} from "react-router-dom";


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
    return (
        <div className={css.selectPanel}>
            <Select title="Location"
                    icon='icon-search'>
                Enter Location
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
                Select Type
            </Select>


            <Button style={css.searchBtn}>
                <Link to="/homes">
                    <i className="icon-search"></i>
                </Link>
            </Button>
        </div>
    )
}

export default SelectPanel