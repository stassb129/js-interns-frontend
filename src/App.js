import './App.scss';
import {useState} from "react";
import LoginFormModal from "./components/LoginFormModal/LoginFormModal";

function App() {
    document.title = "Pinktada"
    const [modalActive, setModalActive] = useState(false)

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