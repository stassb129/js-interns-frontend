import css from './homesPage.module.scss'
import Header from "../../components/Global/Header/Header"
import Map from "../../components/Map/Map";
import PlacesNear from "../../components/PlacesNear/PlacesNear";
import {useRef} from "react";
import MyMap from "../../components/Map/Map";

const HomesPage = () => {
    const ref = useRef()

    return (
        <div className={css.homesPage}>
            <div className={css.header}>
                <Header/>
            </div>
            <div ref={ref} className={css.placesNear}>
                <PlacesNear scrollPage={ref}/>
            </div>
            <div className={css.map}>
                <MyMap/>
            </div>
        </div>
    )
}

export default HomesPage