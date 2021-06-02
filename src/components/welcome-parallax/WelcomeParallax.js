import css from './welcomeParallax.module.scss'
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
            <img style={{top: scrollY * 0.5 + "px"}} src='images/parallax/bg.jpg' alt=""/>
            <img style={{top: -scrollY * 0.2 + 200 + "px"}} className={css.mountain} src='images/parallax/mountain.png'
                 alt=""/>
            <img style={{left: scrollY * 0.20 + "px"}} className={css.moon} src='images/parallax/moon.png' alt=""/>
            <img style={{top: scrollY * 0.15 + "px"}} className={css.road} src='images/parallax/road.png' alt=""/>

            <div className={css.content}>
                {children}
            </div>
        </div>
    );
};

export default WelcomeParallax;