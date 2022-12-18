import React from 'react'
import Pic3 from '../../icons/400x600 - 1200x1800.svg'
import Shape from '../../icons/Vector (2).svg'
import Picture from '../Picture'
import Image from '../../icons/Vector (3).svg'
import './style.css'
import Section3 from '../Section3'
import Input from '../Input'

const Section2 = () => {
  return (
    <>
    <main>
        <div className='main-section'><Picture/></div>
        
        <div className='main-container'>
        <div className='main-pic'>
            <img src={Pic3}/>
            <img src={Shape} className="main-shape"/>
            <p><span className='span1'>50%</span><br/><span className='span2'>indirim</span></p>
        </div>
        <div className='main-right'>
            <div className='main-right_top'>
                <p className='main-koton_text'><span className='koton'>Koton</span> Kadın Antrasit Kaban 0KAK0 <br/> 6697EW</p>
                <p><span className='span4'>Satıcı:</span> <span className='span5'>Koton</span> <span className='span6'>9.5</span></p>
                <div className='starts'>
                <p>5</p>
                <div className='main-images'>
                <img src={Image}/> <img src={Image}/> <img src={Image}/> <img src={Image}/> <img src={Image}/>
                </div>
                </div>
                <div className='main-value'><p><span className='span7'>99,99TL</span> <span className='span8'>59,99TL</span></p></div>
                <Section3/>
                <Input/>
                <div className='end-section'>
                    <button className='btn1'>HEMEN AL</button>
                    <button className='btn2'>SEBETE EKLE</button>
                </div>
            </div>
        </div>
</div>
    </main>
    </>
  )
}

export default Section2