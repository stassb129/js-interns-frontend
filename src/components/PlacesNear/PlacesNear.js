import css from './placesNear.module.scss'
import PlaceItem from "../PlaceItem/PlaceItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {fetchNextPlaces} from "../../redux/placesSlice";


const PlacesNear = ({scrollPage}) => {

    const dispatch = useDispatch()
    const placesData = useSelector(state => state.places.data)

    const [fetch, setFetch] = useState(false)


    useEffect(() => {
        if (fetch) {
            dispatch(fetchNextPlaces())
        }
    }, [fetch])

    useEffect(() => {
        scrollPage.current.addEventListener('scroll', scrollHandler)
        return () => {
            // scrollPage.current.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
            setFetch(true)
        } else setFetch(false)
    }


    return (
        <div className={css.placesNear}>
            <h3>Places to buy near you</h3>
            <div className={css.filters}>
                <div>filters...</div>
            </div>

            {console.log(placesData)}
            {placesData && placesData.data && placesData.data.map((e) => {
                return <PlaceItem
                    key={e._id}
                    id={e._id}
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