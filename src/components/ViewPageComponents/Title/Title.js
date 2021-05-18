import css from './title.module.scss'

const Title = ({name, city, rating, rateCount}) => {
    return (
        <div className={css.viewTitle}>
            <div className={css.title}>{name}</div>
            <div className={css.littleDesc}>
                <div className={css.city}>
                    {city}
                </div>
                <div className={css.superhost}>
                    superhost
                </div>
                <div className={css.reviews}>
                    <i className="icon-star"></i>
                    {rating}
                    <span>({rateCount} reviews)</span>
                </div>
            </div>
        </div>
    )
}

export default Title