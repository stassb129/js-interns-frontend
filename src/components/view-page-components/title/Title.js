import css from './title.module.scss'
import Rating from "../../rating/Rating"

const Title = ({name, city, rating, reviewsCount, badges}) => {
    return (
        <div className={css.viewTitle}>
            <div className={css.title}>{name}</div>
            <div className={css.littleDesc}>
                <div className={css.city}>
                    {city}
                </div>
                <div className={css.badges}>
                    {badges.map(e => e)}
                </div>
                <Rating rating={rating}
                        reviewsCount={reviewsCount}/>
            </div>
        </div>
    )
}

export default Title