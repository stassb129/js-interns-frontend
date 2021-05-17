import css from './viewPage.module.scss'
import Header from "../../components/Global/Header/Header"
import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react"
import {getPlaceById} from "../../api/getPlaceById"

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


                        <div className={css.imagesContainer}>
                            <div style={{backgroundImage: `url(${e.listing.pictureUrl})`}} className={css.main}></div>

                            <div style={{backgroundImage: `url(${e.listing.contextualPictures[1].picture})`}}>
                            </div>

                            <div style={{backgroundImage: `url(${e.listing.contextualPictures[2].picture})`}}>
                            </div>

                            <div style={{backgroundImage: `url(${e.listing.contextualPictures[3].picture})`}}>
                            </div>

                            <div style={{backgroundImage: `url(${e.listing.contextualPictures[4].picture})`}}>
                            </div>
                        </div>

                        <div className={css.about}>
                            <div className={css.name}>
                                <h3>{e.listing.kickerContent.messages} By {e.listing.user.firstName}</h3>
                                <div className={css.aboutDescription}>
                                    <span>{e.listing.guestLabel} · </span>
                                    <span>{e.listing.bedrooms} bedroom · </span>
                                    <span>{e.listing.beds} bed · </span>
                                    <span>{e.listing.bathrooms} baths</span>
                                </div>

                            </div>
                            <img className={css.hostPicture} src={e.listing.user.pictureUrl} alt=""/>
                        </div>


                    </div>)
                }

            </div>

        </div>
    )
}


export default withRouter(ViewPage)

//listing. badges[]
//listing.bathrooms
//listing.beds
//listing.bedrooms
//listing.guestLabel - guests
//listing.hostThumbnailUrl
//listing.user.firstName
//listing.user.pictureUrl
//listing.kickerContent.messages