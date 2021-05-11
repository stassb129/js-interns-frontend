import css from './welcomePage.module.scss'
import WelcomeParallax from "../../components/WelcomeParallax/WelcomeParallax"
import WelcomeHeader from "../../components/Global/WelcomeHeader/WelcomeHeader"
import Button from "../../components/Button/Button"
import SelectPanel from "../../components/SelectPanel/SelectPanel"
import Footer from "../../components/Global/Footer/Footer";

import hotel1 from '../../images/hotels/1.jpeg'
import hotel2 from '../../images/hotels/2.jpeg'
import hotel3 from '../../images/hotels/3.jpeg'
import hotel4 from '../../images/hotels/4.jpeg'

import los_angeles from '../../images/cities/los-angeles'
import sun_francisco from '../../images/cities/sun-francisco'
import miami from '../../images/cities/miami'
import houston from '../../images/cities/houston.jpg'
import new_york from '../../images/cities/new_york'



const WelcomePage = () => {
    return (
        <div className={css.welcomePage}>

            <WelcomeParallax>
                <WelcomeHeader/>
                <SelectPanel/>

                <div className={css.description}>
                    <span>Discover rooms,</span>
                    <span>Hotels & make assets!</span>
                    <Button>Become a Seller</Button>
                </div>
            </WelcomeParallax>

            <section>
                <h3 className={css.sectionHeader}>Top Rated</h3>
                <div className={css.topRated}>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(${hotel1})`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(${hotel2})`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(${hotel3})`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(${hotel4})`}}
                             className={css.itemPicture}></div>
                    </div>
                </div>
            </section>

            <section className={css.citiesSection}>
                <h3 className={css.sectionHeader}>
                    Find Hotels in Major Cities
                </h3>
                <div className={css.gridMajorCities}>
                    <div className={css.sun_francisco}
                         style={{backgroundImage: `url(${sun_francisco})`}}></div>
                    <div className={css.houston}
                         style={{backgroundImage: `url(${houston})`}}></div>
                    <div className={css.los_angeles}
                         style={{backgroundImage: `url(${los_angeles})`}}></div>
                    <div className={css.miami}
                         style={{backgroundImage: `url(${miami})`}}></div>
                    <div className={css.new_york}
                         style={{backgroundImage: `url(${new_york})`}}></div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}


export default WelcomePage