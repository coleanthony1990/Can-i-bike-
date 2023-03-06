import React, { useEffect, useState } from 'react'
import Day from './Day'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme, VictoryStack } from 'victory';
import '../styles/WeatherCards.css'
import BarGraph from './BarGraph';
import WindGraph from './WindGraph';
import LineGraph from './LineGraph';


const TempGraph = ({data}) => {
  




  
  console.log(data)
  const days = data.length !== 0 ? data.days.map((day, index) => {
    const date = new Date(day.datetime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    
    return(
    <Day
    high={day.tempmax}
    conditions={day.conditions}
    date={date}
    icon={day.icon}
    key={index}
    />
    )
  }) : ''

  
  return (
    <div className='data-stuff'>
      <div className='chartsContainer'>
      <BarGraph data={data}/>
      <WindGraph data={data}/>
      <LineGraph data={data}/>
      </div>
      <div className='card-container'>
      {days}
      </div>
      
    </div>
  )
}

export default TempGraph
