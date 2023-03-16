import React from "react";
import TempGraph from "../components/TempGraph";
import "../styles/WeatherCards.css";
import BarGraph from "../components/BarGraph";
import WindGraph from "../components/WindGraph";
import LineGraph from "../components/LineGraph";
import { Switch, Route } from "react-router-dom";
import Current from "../components/Current";
import Line from "../components/Line.js";
import ProgressBar from "../components/ProgressBar";



const Graphs = ({ data, newLocation, city, areaName }) => {
  
  
  // const timezone =
  //   data.length !== 0 ? `Weather in ${data.timezone.split("/")[1]}` : null;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const altLanguage = data.length !== 0 && alphabet.includes(data.resolvedAddress[1]) ? null : `(${areaName.charAt(0).toUpperCase()}${areaName.slice(1)})`
  
  const cityName = data.length !== 0 && newLocation === false ? `Weather in ${city.locality}` : null
  return (
    <div className="weather-page">
      {newLocation === true && <p>Weather in {data.resolvedAddress} {altLanguage}</p>}
      {cityName}
      {data.length === 0 && <p>Loading...</p>}
      <div className="chartsContainer">
        <Switch>
          <Route exact path="/">
            <Current data={data} />
          </Route>
          <Route exact path="/15days">
            <div className="twoweeks">
            <BarGraph data={data} />
            <Line data={data}/>
            </div>
            
            <TempGraph data={data} />
            
            </Route>

          <Route exact path="/today">
            <div className="oneday">
            <ProgressBar data={data}/>
            <WindGraph data={data} />
            <LineGraph data={data} />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Graphs;
