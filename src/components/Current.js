import React from 'react'
import {FiWind, FiClock} from 'react-icons/fi'
import {BsThermometerHalf, BsDropletHalf} from 'react-icons/bs'
import {ImCloud} from 'react-icons/im'
import {IoRainySharp} from 'react-icons/io5'
import '../styles/current.css'




const Current = ({data}) => {
  
  // const bigData = data.length !== 0 ? data : null
  const conditions = data.length !== 0 ? data.days[0].conditions : null
  const temp = data.length !== 0 ? ` ${data.currentConditions.temp}\u00B0F` : null
  const feelslike = data.length !== 0 ? ` ${data.currentConditions.feelslike}\u00B0F` : null
  const humidity = data.length !== 0 ? ` ${data.currentConditions.humidity}%` : null
  const precip = data.length !== 0 ? ` ${data.days[0].precipprob}%` : null
  const windSpeed = data.length !== 0 ? ` ${data.currentConditions.windspeed} mph` : null
  const cloudcover = data.length !== 0 ? ` ${data.currentConditions.cloudcover}%` : null
  const determination = data.length !== 0 && data.currentConditions.temp > 40 && (!conditions.includes('Snow') 
  || !conditions.includes('Rain') 
  || conditions.includes('Wind') ) ? 'Go for it! You can bike today!' : 'Yikes! I wouldn\'t bike today if I were you!'
  return (
    <div className='current-container'>
      {/* {data.length !== 0 && <p>Right now in {bigData.timezone.split('/')[1]}</p>} */}
      {data.length !== 0 && <p className='time'><FiClock/> {data.currentConditions.datetime}</p>}
      <div className='conditions-data'>
        <p className='temp'><BsThermometerHalf/>Current temperature: {temp}</p>
        <p className='temp'><BsThermometerHalf/>Feels like: {feelslike}</p>
        <p className='temp'><BsDropletHalf/>{humidity}</p>
        <p className='temp'><IoRainySharp/> {precip}</p>
        <p className='temp'><FiWind/>{windSpeed}</p>
        <p className='temp'><ImCloud/>{cloudcover}</p>
      
      </div>
      <p>{determination}</p>
    </div>
  )
}

export default Current
