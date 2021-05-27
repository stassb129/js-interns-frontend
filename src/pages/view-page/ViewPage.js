import css from './viewPage.module.scss'
import Header from "../../components/global/header/Header"
import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react"
import {getPlaceById} from "../../api/getPlaceById"
import Title from "../../components/view-page-components/title/Title"
import About from "../../components/view-page-components/about/About"
import BookPanel from "../../components/book-panel/BookPanel"
import Footer from "../../components/global/footer/Footer";
import Delimiter from "../../components/delimiter/Delimiter";
import Amenities from "../../components/view-page-components/amenities/Amenities";
import ViewMap from "../../components/view-page-components/view-map/ViewMap";
import GalleryContainer from "../../components/gallery/GalleryContainer";
import PaymentModal from "../../components/payment-modal/PaymentModal";
import {getProfile} from "../../api/api";

const ViewPage = ({match}) => {

    const [place, setPlace] = useState(null)
    const [activePaymentModal, setActivePaymentModal] = useState(false)

    const modalHandler = () => {
        setActivePaymentModal(!activePaymentModal)
    }

    useEffect(() => {
        getPlaceById(match.params.id).then(r => setPlace(r))
    }, [])

    return (
        <div className={css.viewPage}>
            <Header/>
            <div className={css.content}>
                <div className={css.container}>

                    <Link to="/homes">
                        <i className={`icon-left-open ${css.goBack}`}></i>
                    </Link>

                    {place &&
                    <Title
                        name={place.listing.name}
                        city={place.listing.city}
                        badges={place.listing.badges}
                        rating={place.listing.avgRating}
                        reviewsCount={place.listing.reviewsCount}
                    />}


                    {
                        place &&
                        <GalleryContainer pictures={place.listing.contextualPictures.map(e => e.picture)}/>

                    }


                    <div className={css.bookBlock}>

                        <div className={css.about}>
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
                            <Delimiter/>

                            {place &&
                            <Amenities isBusinessTravelReady={place.listing.isBusinessTravelReady}
                                       isNewListing={place.listing.isNewListing}
                                       canInstantBook={place.pricingQuote.canInstantBook}
                                       isSuperhost={place.listing.isSuperhost}/>}

                            {place &&
                            <ViewMap location={place.location}
                                     name={place.listing.name}
                                     address={place.listing.publicAddress}/>}


                        </div>

                        <div className={css.book}>
                            {place &&
                            <BookPanel price={place.pricingQuote.priceString}
                                       bookHandler={modalHandler}
                                       rating={place.listing.avgRating}
                                       reviewsCount={place.listing.reviewsCount}/>}
                        </div>

                    </div>

                </div>
            </div>
            

            {place && activePaymentModal &&
            <PaymentModal active={activePaymentModal}
                          amount={place.pricingQuote.rate.amount}
                          title={place.listing.name}
                          id={place._id}
                          setActive={setActivePaymentModal}/>}

            <Footer/>
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
//listing.isSuperhost

//publicAddress