import css from './viewPage.module.scss'
import Header from "../../components/Global/Header/Header"
import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react"
import {getPlaceById} from "../../api/getPlaceById"
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel"

const ViewPage = ({match}) => {

    const [place, setPlace] = useState(null)

    useEffect(() => {
        getPlaceById(match.params.id).then(r => setPlace(r))
    }, [])

    return (
        <div className={css.viewPage}>
            <Header/>
            <div className={css.content}>

                <Link to="/homes">
                    <i className={`icon-left-open ${css.goBack}`}></i>
                </Link>

                {
                    place && place.map(e => <div key={e._id}>

                        <div className={css.viewTitle}>
                            <div className={css.title}>{e.listing.name}</div>
                            <div className={css.littleDesc}>
                                <div className={css.city}>
                                    {e.listing.city}
                                </div>
                                <div className={css.superhost}>
                                    superhost
                                </div>
                                <div className={css.reviews}>
                                    <i className="icon-star"></i>
                                    {e.listing.avgRating}
                                    <span>({e.listing.reviewsCount} reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className={css.veiwImages}>
                            <img src={e.listing.pictureUrl} alt=""/>

                        </div>
                    </div>)
                }

                {/*<CustomCarousel/>*/}

            </div>

        </div>
    )
}


export default withRouter(ViewPage)