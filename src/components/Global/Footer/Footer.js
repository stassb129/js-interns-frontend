import css from './footer.module.scss'
import {Link} from "react-router-dom";
import Button from "../../Button/Button";
import Delimiter from "../../Delimiter/Delimiter";

const Footer = () => {
    return (
        <footer>
            <div className={css.footer}>
                <div className={css.social}>
                <span className={css.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt fugiat iure minima
                    nostrum ratione sint
                </span>
                    <div className={css.icons}>
                        <i className='icon-facebook'></i>
                        <i className='icon-instagram'></i>
                        <i className='icon-youtube'></i>
                        <i className='icon-twitter'></i>
                    </div>
                </div>

                <div className={css.links}>
                    <Link to="">Home</Link>
                    <Link to="">By Room</Link>
                    <Link to="">Sell Room</Link>
                    <Link to="">Contact</Link>
                    <Link to="">Help</Link>
                </div>

                <div className={css.links}>
                    <Link to="">About</Link>
                    <Link to="">Explore Rooms</Link>
                    <Link to="">Insight</Link>
                    <Link to="">Blog</Link>
                </div>

                <div className={css.newsletter}>
                    <h4>Newsletter</h4>
                    <span>subscribe to newsletter</span>
                    <div className={css.newsletterForm}>
                        <input type="text" placeholder="Enter Email"/>
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
            <Delimiter/>

            <div className={css.licence}>
                <span>All rights Reserved @ 2020</span>
            </div>


        </footer>
    )
}

export default Footer