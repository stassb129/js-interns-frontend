import {MapContainer, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster";
import MapPreloader from "../MapPreloader/MapPreloader";
import LocationMarkers from "../LocationMarkers/LocationMarkers";
import {useSelector} from "react-redux";
import css from './map.module.scss';

const DEFAULT_COORDS = [38.74995, -78.1095]

function Map() {
    const markerStatus = useSelector(state => state.mapItems.items.status)
    return (
        <div className={css.map}>
            {markerStatus === 'loading' && <MapPreloader/>}
            <MapContainer
                center={DEFAULT_COORDS}
                zoom={15}
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
                    // url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
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