import css from './preloader.module.scss'

const Preloader = ({style}) => {
    return (
        <div className={`${css.cssload_bell} ${style}`}>
            <div className={css.cssload_circle}>
                <div className={css.cssload_inner}></div>
            </div>
            <div className={css.cssload_circle}>
                <div className={css.cssload_inner}></div>
            </div>
            <div className={css.cssload_circle}>
                <div className={css.cssload_inner}></div>
            </div>
            <div className={css.cssload_circle}>
                <div className={css.cssload_inner}></div>
            </div>
            <div className={css.cssload_circle}>
                <div className={css.cssload_inner}></div>
            </div>
        </div>
    )
}

export default Preloader