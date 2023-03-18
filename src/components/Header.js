import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Header = ({getData, areaName}) => {
  const [location, setLocation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    getData(location)
    setLocation('')
    areaName(location)
  }

  return (
    <div className='header'>
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}} ><h1 className="title">BikeDay</h1></NavLink>
      <div className='searchbar'>
      <form className='search-box' onSubmit={handleSubmit}>
      <button type='submit' className='btn-search'><FaSearch/></button>
        <input className='input-search' 
               type='text' 
               placeholder='Enter Location' 
               value={location}
               onChange={(event) => setLocation(event.target.value)}>
        </input>
        
      </form>
      </div>
      <nav className='when-buttons'>
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}><button className='button-17'>Current Conditions</button></NavLink>
        <NavLink to='/today' style={{textDecoration: 'none', color: 'black'}}><button className='button-17'>Today</button></NavLink>
       
        <NavLink to='/15days' style={{textDecoration: 'none', color: 'black'}}><button className='button-17'>2 weeks</button></NavLink>
      </nav>
    </div>
  )
}

export default Header
