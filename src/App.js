import './App.scss';
import {useState} from "react";
import Map from "./components/Map/Map";
import {getMapItems} from "./api/getMapItems";


function App() {
    // const [mapPoints, setMapPoints] = useState([])

    return (
        <div className="App">

            {/*<button onClick={*/}
            {/*    async () => {*/}
            {/*        const items = await getMapItems()*/}
            {/*        setMapPoints(items)*/}
            {/*    }*/}
            {/*}>Поставить точки*/}
            {/*</button>*/}



                <Map />



        </div>
    );
}

export default App;