import css from './LoginForm.module.scss'
import {useState} from "react";
import {login} from "../../api/login";

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        // api.login(email, password);
    };
    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit}>

                <div className={css.inputField}>
                    <label htmlFor='username'>Username</label>
                    <input type='username' id='username' value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className={css.inputField}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button onClick={() => login(username, password)} className={css.loginBtn}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
