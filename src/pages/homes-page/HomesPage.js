import css from './homesPage.module.scss'
import Header from "../../components/global/header/Header"
import PlacesNear from "../../components/places-near/PlacesNear";
import {useRef} from "react";
import Map from "../../components/map/Map";

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
                <Map/>
            </div>
        </div>
    )
}

export default HomesPage