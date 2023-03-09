import React from 'react'
import TempGraph from '../components/TempGraph'
import '../styles/WeatherCards.css'
import BarGraph from '../components/BarGraph';
import WindGraph from '../components/WindGraph';
import LineGraph from '../components/LineGraph';
import {Switch, Route} from 'react-router-dom'


const Graphs = ({data, newLocation}) => {
  return (
    <div className='weather-page'>
      {newLocation === true && <p>{data.resolvedAddress}</p>}
      {!newLocation && <p>Weather in {data.timezone}</p>}
      <div className='chartsContainer'>
      <Switch>
      <Route exact path='/15days'><BarGraph data={data}/><TempGraph data={data} /></Route>
      
      <Route exact path='/today'><WindGraph data={data}/><LineGraph data={data}/></Route>
      
      </Switch>
      </div>
      
    </div>
  )
}

export default Graphs
