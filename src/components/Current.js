import React from 'react'
import {FiWind, FiClock} from 'react-icons/fi'
import {BsThermometerHalf, BsDropletHalf} from 'react-icons/bs'
import {ImCloud} from 'react-icons/im'
import {IoRainySharp} from 'react-icons/io5'
import '../styles/current.css'
import { DateTime }  from "luxon";



const Current = ({data}) => {
  
  // const bigData = data.length !== 0 ? data : null
  const conditions = data.length !== 0 ? data.days[0].conditions : null
  const temp = data.length !== 0 ? ` ${data.currentConditions.temp}\u00B0F` : null
  const feelslike = data.length !== 0 ? ` ${data.currentConditions.feelslike}\u00B0F` : null
  const humidity = data.length !== 0 ? ` ${data.currentConditions.humidity}%` : null
  const precip = data.length !== 0 ? ` ${data.days[0].precipprob}%` : null
  const windSpeed = data.length !== 0 ? ` ${data.currentConditions.windspeed} mph` : null
  const cloudcover = data.length !== 0 ? ` ${data.currentConditions.cloudcover}%` : null
  const time = data.length !== 0 ? DateTime.fromFormat(data.currentConditions.datetime, 'HH:mm:ss').toFormat('h:mm') : null
  const ampm = data.length !== 0 && Number(data.currentConditions.datetime.slice(0,2)) >= 12 ? 'PM' : 'AM'
  const determination = data.length !== 0 && !conditions.includes('Rain' || 'Snow' || 'Wind') ? 'Go for it! You should ride a bike today!' : 'Yikes! I wouldn\'t bike today if I were you!'
  return (
    <div className='current-container'>
      {/* {data.length !== 0 && <p>Right now in {bigData.timezone.split('/')[1]}</p>} */}
      {data.length !== 0 && <p className='time'><FiClock/> {time} {ampm}</p>}
      <div className='conditions-data'>
        <p className='temp'><BsThermometerHalf/>Current temperature: {temp}</p>
        <p className='temp'><BsThermometerHalf/>Feels like: {feelslike}</p>
        <p className='temp'><BsDropletHalf/>Humidity: {humidity}</p>
        <p className='temp'><IoRainySharp/>Precipitation: {precip}</p>
        <p className='temp'><FiWind/>Windspeed: {windSpeed}</p>
        <p className='temp cloud'><ImCloud/>Cloud Cover: {cloudcover}</p>
      
      </div>
      {data.length !== 0 && <p>{determination}</p>}
    </div>
  )
}

export default Current
