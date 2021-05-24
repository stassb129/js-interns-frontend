import css from './amenities.module.scss'

const Amenities = ({canInstantBook, isBusinessTravelReady, isNewListing, isSuperhost}) => {
    return (
        <div className={css.amenitiesContainer}>
            <div className={css.amenities}>
                <div className={css.amenity}>
                    <i className="icon-bookmark"></i>
                    <h3>Can instant book:
                        {
                            canInstantBook ?
                                <span className={css.yes}>Yes</span> :
                                <span className={css.no}>No</span>
                        }
                    </h3>
                </div>

                <div className={css.amenity}>
                    <i className="icon-home-outline"></i>
                    <h3>Is new listing:
                        {
                            isNewListing ?
                                <span className={css.yes}>Yes</span> :
                                <span className={css.no}>No</span>
                        }
                    </h3>
                </div>

                <div className={css.amenity}>
                    <i className="icon-briefcase"></i>
                    <h3>Is business travel ready:
                        {
                            isBusinessTravelReady ?
                                <span className={css.yes}>Yes</span> :
                                <span className={css.no}>No</span>
                        }
                    </h3>
                </div>

                <div className={css.amenity}>
                    <i className="icon-award"></i>
                    <h3>Is superhost:
                        {
                            isSuperhost ?
                                <span className={css.yes}>Yes</span> :
                                <span className={css.no}>No</span>
                        }
                    </h3>
                </div>
            </div>

            {/*<div className={css.sleeping}>*/}
            {/*  */}
            {/*</div>*/}


        </div>
    )
}

export default Amenities