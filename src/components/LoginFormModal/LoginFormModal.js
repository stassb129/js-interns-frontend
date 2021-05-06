import css from './loginFormModal.module.scss'
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Delimiter from "../Delimiter/Delimiter";
import {useInput} from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {getToken} from "../../redux/authSlice";
import Preloader from "../Preloader/Preloader";

function LoginFormModal({active, setActive}) {

    const loginStatus = useSelector((state) => state.auth.login.status)
    const dispatch = useDispatch()
    const username = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})

    const loginHandler = (username, password) => {
        dispatch(getToken({username, password}))
    }


    return (
        <Modal active={active}
               setActive={setActive}>

            <h3 className={css.title}>Sign In</h3>

            <form className={css.loginForm}>
                <label
                    style={{color: (username.isDirty && username.isEmpty) && "red"}}
                    htmlFor="username">
                    {(username.isDirty && username.isEmpty)
                        ? "the field cannot be empty" : "Username"}
                </label>
                <input name="username"
                       type="text"
                       placeholder={"Enter your username..."}
                       value={username.value}
                       onChange={username.onChange}
                       onBlur={username.onBlur}/>


                <label
                    style={{color: (password.isDirty && password.isEmpty) && "red"}}
                    htmlFor="password">
                    {(password.isDirty && password.isEmpty)
                        ? "the field cannot be empty" : "Password"}
                </label>
                <input name="password"
                       type="password"
                       placeholder="Enter your password..."
                       value={password.value}
                       onChange={password.onChange}
                       onBlur={password.onBlur}/>
            </form>

            <Button
                click={() => loginHandler(username.value, password.value)}
                disabled={!username.inputValid ||
                !password.inputValid}>
                {loginStatus === "loading" ?
                    <Preloader/> :
                    "Continue"}
            </Button>

            {loginStatus === 'error' &&
            <div style={{color: "red"}}> username or password is wrong!!!</div>}

            <Delimiter/>

            <div className={css.signUpTitle}>
                <span>Don't have an account? </span>
                <a href="/#">Sign up hear!</a>
            </div>

        </Modal>
    );
}

export default LoginFormModal;
