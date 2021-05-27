import css from './header.module.scss'
import logo from '../../../images/logo.png'
import Button from "../../button/Button"
import {Link} from "react-router-dom"
import SearchCities from "../../search-cities/SearchCities"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setCity} from "../../../redux/mapItemsSlice";
import CustomSelect from "../../custom-select/CustomSelect";


const HeaderSelect = () => {
    const dispatch = useDispatch()
    const [enterCity, setEnterCity] = useState(null)

    const searchHandler = () => {
        dispatch(setCity(enterCity))
    }

    return (
        <div className={css.headerSelect}>

            <div className={css.select}>
                    <SearchCities setEnterCity={setEnterCity}/>
            </div>

            <div className={css.select}>
                Nov 7-20
            </div>


            <div className={css.select}>
                <CustomSelect style={css.beds}/>
            </div>

            <Button click={searchHandler} style={css.searchBtn}>
                <i className="icon-search"></i>
            </Button>
        </div>
    )
}


const Header = () => {
    return (
        <header className={css.headerContainer}>
            <div className={css.header}>
                <Link to='/'>
                    <img src={logo} alt="" className={css.logo}/>
                </Link>
                <HeaderSelect/>
                <div className={css.profile}>
                    <i className="icon-user"></i>
                </div>
            </div>
        </header>
    )
}

export default Header