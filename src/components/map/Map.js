import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MapPreloader from "../map-preloader/MapPreloader";
import LocationMarkers from "../location-markers/LocationMarkers";
import {useSelector} from "react-redux";
import css from './map.module.scss';


function Map() {
    const markerStatus = useSelector(state => state.mapItems.items.status)
    const centerCoords = useSelector(state => state.mapItems.items.centerCoords)
    const zoom = useSelector(state => state.mapItems.items.zoom)

    const DEFAULT_COORDS = centerCoords || [38.74995, -78.1095]
    const ZOOM = zoom || 14

    return (
        <div className={css.map}>
            {markerStatus === 'loading' && <MapPreloader/>}
            <MapContainer
                center={DEFAULT_COORDS}
                zoom={ZOOM}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />


                <MarkerClusterGroup showCoverageOnHover={false}>
                    <LocationMarkers/>
                </MarkerClusterGroup>

            </MapContainer>
        </div>

    )
}

export default Map