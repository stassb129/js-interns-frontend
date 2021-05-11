import css from './welcomeHeader.module.scss'
import {Link} from "react-router-dom";
import Button from "../../Button/Button";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import LoginFormModal from "../../LoginFormModal/LoginFormModal";

const WelcomeHeader = () => {
    const loginStatus = useSelector(state => state.auth.login.status)
    const isLogin = useSelector(state => state.auth.login.isLogin)
    const [loginModalActive, setLoginModalActive] = useState(false)

    useEffect(() => {
        if (loginStatus === 'done') {
            setLoginModalActive(false)
        }
    }, [loginStatus])

    const loginModalHandler = () => {
        setLoginModalActive(!loginModalActive)
    }
    return (
        <header className={css.header}>
            <ul>
                <li>
                    <Link to=''>Buy</Link>
                </li>
                <li>
                    <Link to=''>For Sale</Link>
                </li>
                <li>
                    <Link to=''>Insight</Link>
                </li>
                <li>
                    <Link to=''>Contact</Link>
                </li>
                <li>
                        <Button style={`${css.findBtn} ${css.btn}`}>
                            <i className="icon-search"></i>
                            Find Nearby
                        </Button>
                </li>
                <li>
                    {
                        !isLogin &&
                        <Button style={css.btn} click={loginModalHandler}>
                            Sign in
                        </Button>
                    }
                </li>
            </ul>

            <LoginFormModal active={loginModalActive}
                            setActive={setLoginModalActive}/>
        </header>
    );
};

export default WelcomeHeader;