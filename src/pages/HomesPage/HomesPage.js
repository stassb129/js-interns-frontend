import css from './homesPage.module.scss'
import Header from "../../components/Global/Header/Header"
import Map from "../../components/Map/Map";
import PlacesNear from "../../components/PlacesNear/PlacesNear";

const HomesPage = () => {
    return (
        <div className={css.homesPage}>
            <div className={css.header}>
                <Header/>
            </div>
            <div className={css.placesNear}>
                <PlacesNear/>
            </div>
            <div className={css.map}>
                <Map/>
            </div>
        </div>
    )
}

export default HomesPage