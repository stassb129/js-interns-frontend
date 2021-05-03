import './mapPreloader.scss'
import {CSSTransitionGroup} from 'react-transition-group' // ES6

const MapPreloader = () => {
    return (
        <CSSTransitionGroup
            transitionName="mapLoaderTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <svg className="loader" viewBox="0 0 24 24">
                <circle className="loader__value" cx="12" cy="12" r="10"/>
                <circle className="loader__value" cx="12" cy="12" r="10"/>
                <circle className="loader__value" cx="12" cy="12" r="10"/>
                <circle className="loader__value" cx="12" cy="12" r="10"/>
                <circle className="loader__value" cx="12" cy="12" r="10"/>
                <circle className="loader__value" cx="12" cy="12" r="10"/>
            </svg>
        </CSSTransitionGroup>
    )
}

export default MapPreloader