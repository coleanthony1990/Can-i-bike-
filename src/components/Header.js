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
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}} ><h1 className="title">Can I Bike?</h1></NavLink>
      <div className='searchbar'>
      <form className='search-box' onSubmit={handleSubmit}>
      <button  type='submit' className='btn-search' name='submit-location'><FaSearch/></button>
        <input className='input-search' 
               type='text' 
               placeholder='Enter Location' 
               value={location}
               name='enter-location'
               onChange={(event) => setLocation(event.target.value)}>
              
        </input>
        
      </form>
      </div>
      <nav className='when-buttons'>
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}><button className='button-17' name='current-conditions' >Current Conditions</button></NavLink>
        <NavLink to='/today' style={{textDecoration: 'none', color: 'black'}}><button  className='button-17' name='today'>Today</button></NavLink>
       
        <NavLink to='/15days' style={{textDecoration: 'none', color: 'black'}}><button  className='button-17' name='next-two-weeks'>2 weeks</button></NavLink>
      </nav>
    </div>
  )
}

export default Header
