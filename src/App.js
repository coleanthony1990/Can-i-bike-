import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Graphs from "./containers/Graphs";

function App() {
  const [data, setData] = useState([]);

  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation(position.coords);
    });
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.latitude},${userLocation.longitude}?key=4W7R6KHFXTA5YECCKYQH63LN5`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
  }, [userLocation]);

  const getData = (location) => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4W7R6KHFXTA5YECCKYQH63LN5`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <Header getData={getData} />
      <Graphs data={data} />
    </div>
  );
}

export default App;
