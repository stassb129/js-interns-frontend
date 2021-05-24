import css from './viewPage.module.scss'
import Header from "../../components/global/header/Header"
import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react"
import {getPlaceById} from "../../api/getPlaceById"
import Title from "../../components/view-page-components/title/Title";
import About from "../../components/view-page-components/about/About";

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

                {place &&
                <Title
                    name={place.listing.name}
                    city={place.listing.city}
                    rating={place.listing.avgRating}
                    rateCount={place.listing.reviewsCount}
                />}


                {
                    place &&
                    <div className={css.imagesContainer}>
                        <div style={{backgroundImage: `url(${place.listing.pictureUrl})`}} className={css.main}></div>

                        <div style={{backgroundImage: `url(${place.listing.contextualPictures[1].picture})`}}>
                        </div>

                        <div style={{backgroundImage: `url(${place.listing.contextualPictures[2].picture})`}}>
                        </div>

                        <div style={{backgroundImage: `url(${place.listing.contextualPictures[3].picture})`}}>
                        </div>

                        <div style={{backgroundImage: `url(${place.listing.contextualPictures[4].picture})`}}>
                        </div>
                    </div>
                }


                <div className={css.bookBlock}>
                    {place &&
                    <About
                        desc={place.listing.kickerContent.messages}
                        guests={place.listing.guestLabel}
                        hostName={place.listing.user.firstName}
                        hostPicture={place.listing.user.pictureUrl}
                        bathrooms={place.listing.bathrooms}
                        bedrooms={place.listing.bedrooms}
                        beds={place.listing.beds}
                    />}

                    <div className={css.book}>
                        boook
                    </div>

                </div>


            </div>

        </div>
    )
}

export default withRouter(ViewPage)

//listing.bathrooms
//listing.beds
//listing.bedrooms
//listing.guestLabel - guests
//listing.hostThumbnailUrl
//listing.user.firstName
//listing.user.pictureUrl
//listing.kickerContent.messages


//listing.isBusinessTravelReady
//listing.isNewListing
//pricingQuote.canInstantBook