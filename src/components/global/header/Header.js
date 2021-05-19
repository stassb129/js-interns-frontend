import css from './header.module.scss'
import logo from '../../../images/logo.png'
import Button from "../../button/Button"
import {Link} from "react-router-dom"
import SearchCities from "../../search-cities/SearchCities"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setCenterCoords} from "../../../redux/mapItemsSlice";


const HeaderSelect = () => {
    const dispatch = useDispatch()
    const [enterCity, setEnterCity] = useState(null)

    const searchHandler = () => {
        dispatch(setCenterCoords(enterCity))
    }

    return (
        <div className={css.headerSelect}>
            <div className={css.city}>
                <SearchCities setEnterCity={setEnterCity}/>
            </div>
            <div className={css.date}>Nov 7-20</div>
            <div className={css.bedrooms}>3 Bedrooms</div>
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