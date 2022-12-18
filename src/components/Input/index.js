import React from 'react'
import Alarm from '../../icons/Group (1).svg'
import Heart from '../../icons/Vector (4).svg'
import './style.css'

const Input = () => {
  return (
    <div className='input-section'>
        <div className='beden'>
            <label>
                <p>Beden</p>
                <input type="number" placeholder='Beden Seciniz'  />
            </label>
        </div>
        <div className='adet'>
            <label>
                <p>Adet</p>
                <button className='add'>+</button>
                <input type="text" placeholder='1'  />
                <button className='minus'>-</button>
            </label>
            </div>
            <div className='alarm'>
                    <img src={Alarm}/>
            </div>
            <div className='heart'>
                    <img src={Heart}/>
            </div>
       
    </div>
  )
}

export default Input