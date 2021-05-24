import css from './viewMap.module.scss'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {divIcon} from "leaflet";

const ViewMap = ({location, name, address}) => {

    const ZOOM = 14

    const icon = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-home'><i class='icon-home-outline'></i></div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    return (
        <div className={css.map}>

            <h3 className={css.mapTitle}>Location</h3>
            <MapContainer
                center={location}
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

                <Marker icon={icon} position={location}>
                </Marker>

            </MapContainer>

            <h3 className={css.address}>
                {address}
            </h3>
        </div>
    )
}

export default ViewMap

