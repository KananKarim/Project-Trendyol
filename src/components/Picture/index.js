import React from 'react'
import pic from '../../icons/Rectangle 292.svg'
import pic1 from '../../icons/Rectangle 293.svg'
import pic2 from '../../icons/Rectangle 93.svg'
import {FaAngleUp} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
import './style.css'

const Picture = () => {
  return (
    <div className='picture-left'>
        <FaAngleUp className='picture-up'/>
        <img src={pic}/>
        <img src={pic1}/>
        <img src={pic2}/>
        <FaAngleDown className='picture-down'/>
    </div>
  )
}

export default Picture