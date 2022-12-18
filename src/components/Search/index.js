import React from 'react'
import Vector from '../../icons/Vector (1).svg'
import './style.css'

const Search = () => {
  return (
    <div className='search'>
        <img src={Vector} className="search-img"/>
        <input type="text" className='search-input' placeholder='Aradiginiz Hersey Burada' />
        <button className='search-button'>Arama Yap</button>
    </div>
  )
}

export default Search