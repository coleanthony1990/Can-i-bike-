import React from 'react'
import Condition from './Condition'
import {FiWind, FiClock} from 'react-icons/fi'
import {BsThermometerHalf, BsDropletHalf} from 'react-icons/bs'
import {WiHumidity} from 'react-icons/wi'
import {ImCloud} from 'react-icons/im'
import {IoRainySharp} from 'react-icons/io5'



const Current = ({data}) => {
  
  const bigData = data.length !== 0 ? data : null
  const currentKeys = data.length !== 0 ? Object.keys(data.currentConditions) : null
  
  const conditions = data.length !== 0 ? currentKeys.map((thing, index) => {
    
    return (
      <Condition
      info={data.currentConditions[thing]}
      stuff={thing}
      key={index}
      
      />
    )
  })
   : null
  const temp = data.length !== 0 ? ` ${data.currentConditions.temp}\u00B0F` : null
  const feelslike = data.length !== 0 ? ` ${data.currentConditions.feelslike}\u00B0F` : null
  const humidity = data.length !== 0 ? ` ${data.currentConditions.humidity}%` : null
  const precip = data.length !== 0 ? ` ${data.days[0].precipprob}%` : null
  const windSpeed = data.length !== 0 ? ` ${data.currentConditions.windspeed} mph` : null
  const cloudcover = data.length !== 0 ? ` ${data.currentConditions.cloudcover}%` : null

  return (
    <div>
      {data.length !== 0 && <p>Right now in {bigData.timezone.split('/')[1]}</p>}
      {data.length !== 0 && <p className='time'><FiClock/> {data.currentConditions.datetime}</p>}
      <div className='conditions-data'>
      <p className='temp'><BsThermometerHalf/>Current temperature: {temp}</p>
      <p className='feelslike'><BsThermometerHalf/>Feels like: {feelslike}</p>
      <p className='temp'><BsDropletHalf/>{humidity}</p>
      <p className='temp'><IoRainySharp/> {precip}</p>
      <p className='temp'><FiWind/>{windSpeed}</p>
      <p className='temp'><ImCloud/>{cloudcover}</p>
      
      </div>
    </div>
  )
}

export default Current
