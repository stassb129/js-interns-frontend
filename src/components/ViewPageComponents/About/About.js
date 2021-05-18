import css from './about.module.scss'

const About = ({desc, hostName, guests, bedrooms, beds, bathrooms, hostPicture}) => {
    return (
        <div className={css.about}>
            <div className={css.name}>
                <h3>{desc} By {hostName}</h3>
                <div className={css.aboutDescription}>
                    <span>{guests} · </span>
                    <span>{bedrooms} bedroom · </span>
                    <span>{beds} bed · </span>
                    <span>{bathrooms} baths</span>
                </div>
            </div>
            <img className={css.hostPicture} src={hostPicture} alt=""/>
        </div>
    )
}

export default About
