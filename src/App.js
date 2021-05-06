import './App.scss';
import './fontello/css/fontello.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomesPage from "./pages/HomesPage/HomesPage";

function App() {
    document.title = "Pinktada"


    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/homes">
                        <HomesPage/>
                    </Route>

                    <Route path="/">
                        <WelcomePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App