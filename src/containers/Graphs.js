import React from 'react'
import TempGraph from '../components/TempGraph'
import '../styles/WeatherCards.css'


const Graphs = ({data}) => {
  return (
    <div className='weather-page'>
      <TempGraph data={data}/>
    </div>
  )
}

export default Graphs
