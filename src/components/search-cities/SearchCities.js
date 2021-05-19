import css from './searchCities.module.scss'
import {getCities} from "../../api/getCities"
import {useEffect, useRef, useState} from "react";

const Location = ({city, setCity, setEnterCity}) => {
    const [locationCities, setLocationCities] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getCities(city)
            .then(res => setLocationCities(res))
            .catch(err => setError("Something wrong"))
    }, [city])

    const setLocationHandler = (location) => {
        const cords = {
            lat: location.lat,
            lon: location.lon
        }
        setCity(location.display_name)
        if (locationCities) {
            setEnterCity({centerCoords: cords, zoom: 15})
        }

        setLocationCities(null)
    }

    return (
        <div className={css.cities}>
            {
                locationCities &&
                locationCities.map(e => (
                    <div key={e.osm_id}
                         onClick={() => setLocationHandler(e)}
                         className={css.city}>
                        {e.display_name}
                    </div>
                ))
            }
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    )
}

const SearchCities = ({setEnterCity}) => {
    const [city, setCity] = useState('')

    const locationHandler = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className={css.searchPanel}>
            <input type="text"
                   placeholder="Enter City"
                   value={city}
                   onChange={locationHandler}
                   className={css.locationCityInput}/>
            {
                city &&
                <Location city={city}
                          key={city}
                          setEnterCity={setEnterCity}
                          setCity={setCity}/>
            }
        </div>
    )
}


export default SearchCities