import React from 'react'
import '../styles/WeatherCards.css'
import bike from '../assets/bike.png'
import nobike from '../assets/nobike.png'

const Day = ({high, conditions, date, icon}) => {
  const bikeDecision = high > 40 
  && (!conditions.includes('Snow') 
  || !conditions.includes('Rain')) 
  ? bike : nobike
  console.log(!conditions.includes('Snow') || conditions.includes('Rain'))
  return (
    <div className='weather-card'>
      <h3>{date}</h3>
      <p>{high} and {conditions}</p>
      <img src={bikeDecision} alt='somethin'/>
    </div>
  )
}

export default Day
