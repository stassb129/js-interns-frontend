import css from './selectPanel.module.scss'
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import Button from "../Button/Button";


const Select = ({title, icon, children}) => {
    return (
        <div className={css.select}>
            <i className={`${icon} ${css.icon}`}></i>
            <div className={css.description}>
                <span>{title}</span>
                <div>{children}</div>
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
                <i className="icon-search"></i>
            </Button>
        </div>
    )
}

export default SelectPanel;