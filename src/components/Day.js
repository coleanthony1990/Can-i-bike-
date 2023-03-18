import React from 'react'
import '../styles/WeatherCards.css'
import bike from '../assets/bike.png'
import nobike from '../assets/nobike.png'
import puffer from '../assets/puffer.png'
import lightJacket from '../assets/light-jacket.png'

const Day = ({high, conditions, date, icon}) => {
  
  const bikeDecision =
  conditions.includes('Rain' || 'Snow' || 'Wind')  
 
  ? nobike : bike

  const jacket = () => {
    if (high > 60) {
      return null
    } else if (high >50) {
      return lightJacket
    } else return puffer
  }
  

  const yesJacket = jacket() === null ? null : <img src={jacket()} alt='jacket determination'/>
  
  return (
    <div className='weather-card'>
      <h3>{date}</h3>
      <p>High of {high} and {conditions}</p>
      <img src={bikeDecision} alt='somethin'/>
      {yesJacket}
    </div>
  )
}

export default Day
