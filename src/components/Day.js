import React from 'react'
import '../styles/WeatherCards.css'
import bike from '../assets/bike.png'
import nobike from '../assets/nobike.png'

const Day = ({high, conditions, date, icon}) => {
  const bikeDecision = high > 40 
  && (!conditions.includes('Snow') 
  || !conditions.includes('Rain') 
  || conditions.includes('Wind') )
  ? bike : nobike


  
  
  return (
    <div className='weather-card'>
      <h3>{date}</h3>
      <p>high of {high} and {conditions}</p>
      <img src={bikeDecision} alt='somethin'/>
    </div>
  )
}

export default Day
