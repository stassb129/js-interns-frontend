import 'leaflet/dist/leaflet.css'
import './markers.scss'
import {useDispatch, useSelector} from "react-redux";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {fetchMapItems, setCoords} from "../../redux/mapItemsSlice";
import {divIcon} from "leaflet";
import {useEffect} from "react";
import {fetchPlaces} from "../../redux/placesSlice";


function LocationMarkers() {
    const mapMarkers = useSelector(state => state.mapItems.items)
    const dispatch = useDispatch()

    const map = useMapEvents({
        moveend() {
            const bounds = map.getBounds();
            dispatch(setCoords(bounds))
            dispatch(fetchMapItems(bounds))
            dispatch(fetchPlaces(bounds))
        }
    })

    useEffect(() => {
        const bounds = map.getBounds();
        dispatch(setCoords(bounds))
        dispatch(fetchMapItems(bounds))
        dispatch(fetchPlaces(bounds))
    }, [])

    const icon = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin'></div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    return mapMarkers.data && mapMarkers.data.map(e => {
        return <Marker icon={icon} key={e._id} position={e.location}>
            <Popup>
                {e.listing.name}
            </Popup>
        </Marker>
    })
}

export default LocationMarkers