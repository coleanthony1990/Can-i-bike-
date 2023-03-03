import React, { useState } from 'react'

const Header = ({getData}) => {
  const [location, setLocation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    getData(location)
  }

  return (
    <div>
      <form className='searchbar' onSubmit={handleSubmit}>
        <input className='search' 
               type='text' 
               placeholder='enter location' 
               onChange={(event) => setLocation(event.target.value)}>
        </input>
        <button type='submit' className='submit-button'>GO</button>
      </form>
    </div>
  )
}

export default Header
