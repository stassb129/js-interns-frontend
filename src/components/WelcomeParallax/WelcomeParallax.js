import css from './welcomeParallax.module.scss'
import bg from "../../images/bg.jpg";
import mountain from "../../images/mountain.png";
import moon from "../../images/moon.png";
import road from "../../images/road.png";
import {useEffect, useState} from "react";

const WelcomeParallax = ({children}) => {

    const [scrollY, setScrollY] = useState(0)
    const handleScroll = () => setScrollY(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={css.parallax}>
            <img style={{top: scrollY * 0.5 + "px"}} src={bg} alt=""/>
            <img style={{top: -scrollY * 0.2 + 200 + "px"}} className={css.mountain} src={mountain} alt=""/>
            <img style={{left: scrollY * 0.20 + "px"}} className={css.moon} src={moon} alt=""/>
            <img style={{top: scrollY * 0.15 + "px"}} className={css.road} src={road} alt=""/>

            <div className={css.content}>
                {children}
            </div>
        </div>
    );
};

export default WelcomeParallax;