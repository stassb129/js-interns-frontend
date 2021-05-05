import css from './button.module.scss'

const Button = ({children, disabled, click}) => {
    return (
        <button disabled={disabled}
                onClick={click}
                className={css.btn}>
            {children}
        </button>
    );
};

export default Button;