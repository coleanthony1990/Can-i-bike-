import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Graphs from "./containers/Graphs";

function App() {
  const [data, setData] = useState([]);
  const [newLocation, SetNewLocation] = useState(false)
  const [city, setCity] = useState('')
  const [userLocation, setUserLocation] = useState({});
  const [areaName, setAreaName] = useState('')
  console.log(userLocation)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation(position.coords);
      console.log(position);
    });
  }, []);

  useEffect(() => {
    if (userLocation) {
      console.log(userLocation)
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.latitude},${userLocation.longitude}?key=4W7R6KHFXTA5YECCKYQH63LN5`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
    if (userLocation) {
      fetch(
       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&localityLanguage=en`
      )
      .then(res => res.json())
      .then(res => setCity(res))
      .catch((error) => console.log(error))
    }


  }, [userLocation]);

  const getData = (location) => {
    SetNewLocation(true)
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4W7R6KHFXTA5YECCKYQH63LN5`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  };



  return (
    <div className="App">
      <Header getData={getData} areaName={setAreaName}/>
      <Graphs data={data} newLocation={newLocation} city={city} areaName={areaName}/>
    </div>
  );
}

export default App;
