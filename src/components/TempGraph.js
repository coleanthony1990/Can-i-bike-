import React from 'react'
import Day from './Day'
import '../styles/WeatherCards.css'

const TempGraph = ({data}) => {
  
  console.log(data)
  const days = data.length !== 0 ? data.days.map((day, index) => {
    
    return(
    <Day
    high={day.tempmax}
    conditions={day.conditions}
    date={day.datetime}
    icon={day.icon}
    />
    )
  }) : ''
  
  //temp graph by hours using chartJS
  return (
    <div >
      {data.address}
      <div className='card-container'>
      {days}
      </div>
    </div>
  )
}

export default TempGraph
