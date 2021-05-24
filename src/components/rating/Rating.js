import css from './reviews.module.scss'

const Rating = ({rating, reviewsCount}) => {
    return (
        <div className={css.reviews}>
            <i className="icon-star"></i>
            {rating}
            <span>({reviewsCount} reviews)</span>
        </div>
    )
}

export default Rating