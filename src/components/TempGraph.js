import React from 'react'
import Day from './Day'
import '../styles/WeatherCards.css'



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
     
      <div className='card-container'>
      {days}
      </div>
      
    </div>
  )
}

export default TempGraph
