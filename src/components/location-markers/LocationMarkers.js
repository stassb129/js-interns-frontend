import 'leaflet/dist/leaflet.css'
import './markers.scss'
import {useDispatch, useSelector} from "react-redux";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {fetchMapItems, setCenterCoords, setCity, setCoords} from "../../redux/mapItemsSlice";
import {divIcon} from "leaflet";
import {useEffect} from "react";
import {fetchPlaces} from "../../redux/placesSlice";


function LocationMarkers() {
    const mapMarkers = useSelector(state => state.mapItems.items.data)
    const mapCenterCoords = useSelector(state => state.mapItems.items.centerCoords)
    const mapCityName = useSelector(state => state.mapItems.items.cityName)
    const zoom = useSelector(state => state.mapItems.items.zoom)
    const dispatch = useDispatch()


    const map = useMapEvents({
        moveend() {
            const bounds = map.getBounds();
            dispatch(setCoords(bounds))
            dispatch(fetchMapItems(bounds))
            dispatch(fetchPlaces())
        }
    })

    useEffect(() => {
        if (mapCityName) {
            map.flyTo(mapCenterCoords, zoom, {
                animate: true,
                duration: 2
            })
            const bounds = map.getBounds()
            dispatch(setCity(bounds))
        }
    }, [mapCityName])


    useEffect(() => {
        const bounds = map.getBounds();
        dispatch(setCoords(bounds))
        dispatch(fetchMapItems(bounds))
        dispatch(fetchPlaces())

        return () => {
            const data = {
                centerCoords: map.getCenter(),
                zoom: map.getZoom()
            }
            dispatch(setCenterCoords(data))
        }
    }, [])


    const icon = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin'></div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });


    return mapMarkers && mapMarkers.map(e => {

        return (
            <Marker icon={icon} key={e._id} position={e.location}>
                <Popup>
                    {e.listing.name}
                </Popup>
            </Marker>
        )
    })
}

export default LocationMarkers