import css from './button.module.scss'

const Button = ({children, disabled, click, style}) => {
    return (
        <button disabled={disabled}
                onClick={click}
                className={`${css.btn} ${style}`}>
            {children}
        </button>
    );
};

export default Button;