import React from 'react'
import FirstPic from '../../icons/Rectangle 333.svg'
import SecondPic from '../../icons/Rectangle 336.svg'
import Bus from '../../icons/svgexport-8 (16) 2.svg'
import Etiket from '../../icons/svgexport-8 (21) 1.svg'
import './style.css'

const Section3 = () => {
  return (
    <div className='section3'>
        <div className='section3-first'>
            <img src={FirstPic}/>
            <img src={SecondPic}/>
            <img src={FirstPic}/>
            <img src={SecondPic}/>
            <img src={FirstPic}/>
            <img src={SecondPic}/>
        </div>
        <div className='section3-second'>
            <img src={Bus}/>
            <p className='p1'>KARGO</p>
            <p>BEDAVA</p>
        </div>
        <div className='section3-third'>
            <img src={Etiket}/>
            <p className='percent'>40%</p>
            <p>INDIRIM</p>
        </div>

    </div>
  )
}

export default Section3