import css from './preloader.module.scss'

const Preloader = () => {
    return (
        <div className={css.loader}>
            <span></span>
        </div>
    );
};

export default Preloader;