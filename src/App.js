import './App.scss';
import {useState} from "react";
import Map from "./components/Map/Map";
import {getMapItems} from "./api/getMapItems";
import MapContainer from "./components/Map/Map";


function App() {
    const [mapPoints, setMapPoints] = useState([])

    return (
        <div className="App">

            <button onClick={
                async () => {
                    const items = await getMapItems()
                    setMapPoints(items)
                }
            }>Поставить точки
            </button>



                <Map mapPoints={mapPoints}/>



        </div>
    );
}

export default App;