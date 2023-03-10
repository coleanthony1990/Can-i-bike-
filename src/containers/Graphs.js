import React from "react";
import TempGraph from "../components/TempGraph";
import "../styles/WeatherCards.css";
import BarGraph from "../components/BarGraph";
import WindGraph from "../components/WindGraph";
import LineGraph from "../components/LineGraph";
import { Switch, Route } from "react-router-dom";
import Current from "../components/Current";
import Line from "../components/Line.js";


const Graphs = ({ data, newLocation }) => {
  const timezone =
    data.length !== 0 ? `Weather in ${data.timezone.split("/")[1]}` : null;
  return (
    <div className="weather-page">
      {newLocation === true && <p>{data.resolvedAddress}</p>}

      {data.length === 0 && <p>Loading...</p>}
      <div className="chartsContainer">
        <Switch>
          <Route exact path="/">
            <Current data={data} />
          </Route>
          <Route exact path="/15days">
            <BarGraph data={data} />
            <Line data={data}/>
            <TempGraph data={data} />
            
            </Route>

          <Route exact path="/today">
            <WindGraph data={data} />
            <LineGraph data={data} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Graphs;
