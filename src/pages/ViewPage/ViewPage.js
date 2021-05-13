import css from './viewPage.module.scss'
import Header from "../../components/Global/Header/Header";
import {withRouter} from "react-router-dom"
import {useEffect, useState} from "react";
import {getPlaceById} from "../../api/getPlaceById";

const ViewPage = ({match}) => {

    const [place, setPlace] = useState(null)

    useEffect(() => {
        getPlaceById(match.params.id).then(r => setPlace(r))
    }, [])

    return (
        <div className={css.viewPage}>
            <Header/>
            <div className={css.content}>

                {
                    place && place.map(e => <div>{e.listing.name}</div>)
                }
                {/*<div className={css.viewTitle}>*/}
                {/*    <div className={css.title}>InterLoft 12 sat</div>*/}
                {/*    <div className={css.littleDesc}>*/}
                {/*        <div className={css.reviews}>*/}
                {/*            <i className="icon-star"></i>*/}
                {/*            5.0*/}
                {/*            <span>(49 reviews)</span>*/}
                {/*        </div>*/}
                {/*        <div className={css.superhost}>*/}
                {/*            superhost*/}
                {/*        </div>*/}
                {/*        <div className={css.city}>*/}
                {/*            Minsk*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </div>
    );
};


export default withRouter(ViewPage)