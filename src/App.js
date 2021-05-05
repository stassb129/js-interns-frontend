import './App.scss';
import {useEffect, useState} from "react";
import LoginFormModal from "./components/LoginFormModal/LoginFormModal";
import {useSelector} from "react-redux";

function App() {
    document.title = "Pinktada"
    const [modalActive, setModalActive] = useState(false)
    const loginStatus = useSelector((state) => state.auth.login.status)

    useEffect(() => {
        loginStatus === 'done' && setModalActive(false)
    }, [loginStatus])

    const modalHandler = () => {
        setModalActive(true)
    }

    return (
        <div className="App">

            <button onClick={modalHandler}>Открыть Модалчоку</button>

            <LoginFormModal active={modalActive}
                            setActive={setModalActive}/>
        </div>
    )
}

export default App