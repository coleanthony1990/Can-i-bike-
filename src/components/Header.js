import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({getData}) => {
  const [location, setLocation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    getData(location)
  }

  return (
    <div>
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}} ><h1 className="thing">Can I Bike?</h1></NavLink>
      <form className='searchbar' onSubmit={handleSubmit}>
        <input className='search' 
               type='text' 
               placeholder='enter location' 
               onChange={(event) => setLocation(event.target.value)}>
        </input>
        <button type='submit' className='submit-button'>GO</button>
      </form>
      <nav className='when-buttons'>
        <NavLink to='today' style={{textDecoration: 'none', color: 'black'}}><button className='display-button'>Today</button></NavLink>
       
        <NavLink to='15days' style={{textDecoration: 'none', color: 'black'}}><button className='display-button'>Next 2 weeks</button></NavLink>
      </nav>
    </div>
  )
}

export default Header
