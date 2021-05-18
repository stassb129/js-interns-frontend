import css from './viewPage.module.scss'
import Header from "../../components/Global/Header/Header"
import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react"
import {getPlaceById} from "../../api/getPlaceById"
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Title from "../../components/ViewPageComponents/Title/Title";
import About from "../../components/ViewPageComponents/About/About";

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

                {place &&
                <CustomCarousel items={place.listing.contextualPictures.map(e => e.picture)}/>}

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