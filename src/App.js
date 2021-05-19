import './App.scss';
import './fontello/css/fontello.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import HomesPage from "./pages/homes-page/HomesPage";
import ViewPage from "./pages/view-page/ViewPage";

function App() {
    document.title = "Pinktada"


    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/view/:id">
                        <ViewPage/>
                    </Route>

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