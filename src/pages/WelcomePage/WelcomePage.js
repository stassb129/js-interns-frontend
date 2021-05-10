import css from './welcomePage.module.scss';
import WelcomeParallax from "../../components/WelcomeParallax/WelcomeParallax";
import Header from "../../components/global/Header/Header";
import SelectPanel from "../../components/SelectPanel/SelectPanel";
import Button from "../../components/Button/Button";
import hotel1 from '../../images/hotels/1.jpg'
import hotel2 from '../../images/hotels/2.jpg'
import hotel3 from '../../images/hotels/3.jpg'
import hotel4 from '../../images/hotels/4.jpg'


const WelcomePage = () => {


        return (
            <div className={css.welcome}>

                <WelcomeParallax>
                    <Header/>
                    <SelectPanel/>

                    <div className={css.description}>
                        <span>Discover rooms,</span>
                        <span>Hotels & make assets!</span>
                        <Button>Become a Seller</Button>
                    </div>
                </WelcomeParallax>

                <section className={css.topRatedSection}>
                    <h3>Top Rated</h3>
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


            </div>
        );
    }
;

export default WelcomePage;