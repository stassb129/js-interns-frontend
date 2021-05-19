import css from './header.module.scss'
import logo from '../../../images/logo.png'
import Button from "../../button/Button";
import {Link} from "react-router-dom";


const HeaderSelect = () => {
    return (
        <div className={css.headerSelect}>
            <div className={css.city}>Jersey City</div>
            <div className={css.date}>Nov 7-20</div>
            <div className={css.bedrooms}>3 Bedrooms</div>
            <Button style={css.searchBtn}>
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