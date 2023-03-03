
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Graphs from './containers/Graphs';

function App() {
const [data, setData] = useState([])
const [error, setError] = useState([])
const todayDate = new Date().toLocaleDateString()
const [userLocation, setUserLocation] = useState({})
console.log(todayDate)

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setUserLocation(position.coords)
  });
}, [])
console.log(userLocation)
console.log(data)

useEffect(() => {
  if (userLocation) {
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.latitude},${userLocation.longitude}?key=4W7R6KHFXTA5YECCKYQH63LN5`)
          .then(res => res.json())
          .then(res => setData(res))
          .catch(error => setError(
        'There was a problem loading your data. Please try again.',
        error
      )
    );
  }
}, [userLocation])


const getData = (location) => {
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4W7R6KHFXTA5YECCKYQH63LN5`)
          .then(res => res.json())
          .then(res => setData(res))
          .catch(error => setError(
        'There was a problem loading your data. Please try again.',
        error
      )
    );
}

const ifData = data ? data : null
  return (
    <div className="App">
      <Header getData={getData}/>
      <Graphs data={data} error={error}/>
    </div>
  );
}

export default App;
