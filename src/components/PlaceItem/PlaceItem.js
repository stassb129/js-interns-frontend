import css from './placeItem.module.scss'
import {Link} from "react-router-dom";

const PlaceItem = ({id, picture, title, price, rating, isAvailable, description, rateCount}) => {
    return (
        <Link to={`view/${id}`}>
            <div className={css.placeItem}>
                <div className={css.picture}
                     style={{backgroundImage: `url('${picture}')`}}>
                </div>
                <div className={css.description}>
                    <h3 className={css.title}>{title}</h3>
                    <span className={css.isAvailable}>{isAvailable}</span>
                    <p className={css.littleDesc}>
                        {description}
                    </p>
                </div>

                <div className={css.price}>
                <span className={css.rating}>
                   <i className="icon-star"></i>
                    {rating}
                    <span>({rateCount})</span>
                </span>
                    <span className={css.dollars}>{price}</span>
                </div>
            </div>
        </Link>
    )
}

export default PlaceItem