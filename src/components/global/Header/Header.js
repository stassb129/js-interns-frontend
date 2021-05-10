import css from './header.module.scss'
import {Link} from "react-router-dom";
import Button from "../../Button/Button";

const Header = () => {
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
                    <Button style={css.findBtn}>
                        <i className="icon-search"></i>
                        Find Nearby
                    </Button>
                </li>
                <li>
                    <Button>
                        Sign in
                    </Button>
                </li>
            </ul>
        </header>
    );
};

export default Header;