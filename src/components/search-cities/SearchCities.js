import css from './searchCities.module.scss'
import {getCities} from "../../api/getCities"
import {useEffect, useRef, useState} from "react";
import {setCenterCoords} from "../../redux/mapItemsSlice";
import {useDispatch} from "react-redux";


const Location = ({city, setCity,}) => {
    const dispatch = useDispatch()
    const [locationCities, setLocationCities] = useState([{
        id: 1,
        name: 'Minsk',
        location: [38.74995, -76.1025]
    }, {id: 2, name: 'Homel', location: [37.74991, -78.1095]}])
    const [error, setError] = useState(null)

    useEffect(() => {
        // getCities(city)
        //     .then(res => setLocationCities(res))
        //     .catch(err => setError("Something wrong"))
        setLocationCities([{
            id: 1,
            name: 'Minsk',
            location: [38.74995, -76.1025]
        }, {id: 2, name: 'Homel', location: [37.74991, -78.1095]}])
    }, [city])


    const setLocationHandler = (location) => {
        dispatch(setCenterCoords({centerCoords: location.location, zoom: 15}))
        setCity(location.name)
        setLocationCities(null)
    }

    return (
        <div className={css.cities}>
            {
                locationCities &&
                locationCities.map(e => (
                    <div key={e.id}
                         onClick={() => setLocationHandler(e)}
                         className={css.city}>
                        {e.name}
                    </div>
                ))
            }
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    )
}

const SearchCities = () => {
    const [city, setCity] = useState('')
    // const [inputFocus, setInputFocus] = useState(false)

    const locationHandler = (e) => {
        setCity(e.target.value)
    }

    // const inputOnFocusHandler = () => {
    //     setInputFocus(true)
    // }
    // const inputOutFocusHandler = () => {
    //     setInputFocus(false)
    // }

    // console.log(inputFocus)

    return (
        <div className={css.searchPanel}>
            <input type="text"
                   placeholder="Enter City"
                   value={city}
                   onChange={locationHandler}
                // onFocus={inputOnFocusHandler}
                // onBlur={inputOutFocusHandler}
                   className={css.locationCityInput}/>
            {
                city &&
                <Location city={city} setCity={setCity}/>
            }
        </div>
    )
}


export default SearchCities