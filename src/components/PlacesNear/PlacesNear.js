import css from './placesNear.module.scss'
import PlaceItem from "../PlaceItem/PlaceItem";

const PlacesNear = () => {
    return (
        <div className={css.placesNear}>
            <h3>Places to buy near you</h3>
            <div className={css.filters}>
                <div>filters...</div>
            </div>

            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>
            <PlaceItem/>

        </div>
    )
}

export default PlacesNear

//listing.avgRating - рейтинг
//listing.city -
//listing.name
//listing.contextualPictures[].picture
//listing.hostThumbnailUrl
//listing.hostThumbnailUrlSmall
//listing.kickerContent.messagesS
//listing.localizedCity
//listing.pictureUrl
//listing.reviews
//listing.publicAddress
//listing.pricingQuote.priceString