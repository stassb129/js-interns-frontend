import css from './placesNear.module.scss'
import PlaceItem from "../place-item/PlaceItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchNextPlaces, fetchPlaces, setSort} from "../../redux/placesSlice";


const PlacesNear = ({scrollPage}) => {

    const dispatch = useDispatch()
    const placesData = useSelector(state => state.places.data)
    const statusMapUpdate = useSelector(state => state.places.statusMapUpdate)
    const [fetch, setFetch] = useState(false)

    const [upPriceFilterActive, setUpPriceFilterActive] = useState(false)
    const [downPriceFilterActive, setDownPriceFilterActive] = useState(false)
    const [upRateFilterActive, setUpRateFilterActive] = useState(false)


    const sortHandler = (type) => {
        dispatch(setSort(type))
        dispatch(fetchPlaces())
    }

    const upPriceFilterHandler = () => {
        setUpPriceFilterActive(!upPriceFilterActive)
        sortHandler('upPrice')
    }

    const downPriceFilterHandler = () => {
        setDownPriceFilterActive(!downPriceFilterActive)
        sortHandler('downPrice')
    }

    const upRateFilterHandler = () => {
        setUpRateFilterActive(!upRateFilterActive)
        sortHandler('upRate')
    }

    useEffect(() => {
        if (fetch) {
            dispatch(fetchNextPlaces())
        }
    }, [fetch])


    useEffect(() => {
        scrollPage.current.scrollTop = 0
    }, [statusMapUpdate])

    const scrollHandler = (e) => {
        if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
            setFetch(true)
        } else setFetch(false)
    }

    useEffect(() => {
        scrollPage.current.addEventListener('scroll', scrollHandler)
        return () => {
            if (scrollPage.current) {
                scrollPage.current.removeEventListener("scroll", scrollHandler)
            }
        }
    }, [])

    return (
        <div className={css.placesNear}>
            <h3>Places to buy near you</h3>
            <div className={css.filters}>
                <button className={upPriceFilterActive ? css.active : ''}
                        onClick={upPriceFilterHandler}>
                    Price
                    <i className="icon-up-open"></i>
                </button>

                <button className={downPriceFilterActive ? css.active : ''}
                        onClick={downPriceFilterHandler}>
                    Price
                    <i className="icon-down-open"></i>
                </button>

                <button className={upRateFilterActive ? css.active : ''}
                        onClick={upRateFilterHandler}>
                    Rating
                    <i className="icon-up-open"></i>
                </button>
            </div>

            {placesData && placesData.data.length !== 0 ? placesData.data.map((e) => (
                <PlaceItem
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
            )) : <div className={css.noPlaces}>There are no hotels in this area...</div>}
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
//listing.rating - отзывы
//listing.reviewsCount - кол-во отзывов
//listing.publicAddress - адрес
//listing.pricingQuote.priceString - шо по бабкам