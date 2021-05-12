import css from './placesNear.module.scss'
import PlaceItem from "../PlaceItem/PlaceItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPlaces} from "../../redux/placesSlice";

const PlacesNear = () => {
    const dispatch = useDispatch()
    const coords = useSelector(state => state.mapItems.items.coords)
    const mapItemsStatus = useSelector(state => state.mapItems.items.status)
    const places = useSelector(state => state.places)


    useEffect(() => {
        if (mapItemsStatus === "done") {
            dispatch(fetchPlaces(coords))
        }
    }, [mapItemsStatus])

    return (
        <div className={css.placesNear}>
            <h3>Places to buy near you</h3>
            <div className={css.filters}>
                <div>filters...</div>
            </div>

            {places.data && places.status === "done" && places.data.map((e) => {
                return <PlaceItem
                    key={e._id}
                    title={e.listing.name}
                    description={e.listing.kickerContent.messages}
                    isAvailable="Available"
                    picture={e.listing.pictureUrl}
                    rating={e.listing.avgRating}
                    rateCount={e.listing.reviewsCount}
                    price={e.pricingQuote.priceString}
                />
            })}

        </div>
    )
}

export default PlacesNear

//listing.avgRating - рейтинг
//listing.city - город
//listing.name -название
//listing.contextualPictures[].picture - массив пикчей
//listing.hostThumbnailUrl - фото арендадателя
//listing.hostThumbnailUrlSmall - фото арендадателя маленькое
//listing.kickerContent.messages - маленькое описание
//listing.localizedCity - город
//listing.pictureUrl - основное фото
//listing.reviews - отзывы
//listing.reviewsCount - кол-во отзывов
//listing.publicAddress - адрес
//listing.pricingQuote.priceString - шо по бабкам