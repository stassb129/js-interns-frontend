import css from './modal.module.scss'

const Modal = ({active, setActive, children, style}) => {

    const closeHandler = () => {
        setActive(false)
    }

    return (
        <div className={active ? `${css.active} ${css.modal}` : css.modal}
             onClick={closeHandler}>

            <div className={`${css.modal_content} ${style}`}
                 onClick={e => e.stopPropagation()}>

                <div className={css.close}
                     onClick={closeHandler}>&#10005;</div>

                {children}

            </div>
        </div>
    )
}

export default Modal