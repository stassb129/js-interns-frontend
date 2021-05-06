import css from './welcomePage.module.scss';

import WelcomeParallax from "../../components/WelcomeParallax/WelcomeParallax";

const WelcomePage = () => {

        return (
            <div className={css.welcome}>


                <WelcomeParallax>
                    header
                </WelcomeParallax>


                <section className={css.topRated}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum dicta esse hic inventore itaque nemo
                    perspiciatis ratione, suscipit. Aliquid aut cupiditate iste sint!
                </section>

            </div>
        );
    }
;

export default WelcomePage;