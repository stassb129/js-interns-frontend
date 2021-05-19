import css from './preloader.module.scss'

const Preloader = () => {
    return (
        <div className={css.cssload_bell}>
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
    );
};

export default Preloader;