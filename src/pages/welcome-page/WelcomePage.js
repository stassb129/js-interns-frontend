import css from './welcomePage.module.scss'
import WelcomeParallax from "../../components/welcome-parallax/WelcomeParallax"
import WelcomeHeader from "../../components/global/welcome-header/WelcomeHeader"
import Button from "../../components/button/Button"
import SelectPanel from "../../components/select-panel/SelectPanel"
import Footer from "../../components/global/footer/Footer"

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
                        <div style={{backgroundImage: `url(images/hotels/1.jpeg)`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(images/hotels/2.jpeg)`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(images/hotels/3.jpeg)`}}
                             className={css.itemPicture}></div>
                    </div>
                    <div className={css.topItem}>
                        <div style={{backgroundImage: `url(images/hotels/4.jpeg)`}}
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
                         style={{backgroundImage: `url(images/cities/sun_francisco)`}}></div>
                    <div className={css.houston}
                         style={{backgroundImage: `url(images/cities/houston.jpg)`}}></div>
                    <div className={css.los_angeles}
                         style={{backgroundImage: `url(images/cities/los_angeles)`}}></div>
                    <div className={css.miami}
                         style={{backgroundImage: `url(images/cities/miami)`}}></div>
                    <div className={css.new_york}
                         style={{backgroundImage: `url(images/cities/new_york)`}}></div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}


export default WelcomePage