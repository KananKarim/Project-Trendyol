import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import Search from '../Search'
import Siparis from '../../icons/Vector.svg'
import Favori from '../../icons/favorilerim-icon.svg'
import Sepet from '../../icons/sepetim-icon.svg'
import './style.css'
import Flag from '../../icons/Rectangle 243.svg'


const Navbar = () => {
  return (
    <>
        <nav>
            <div className='navbar'>
                <div className='navbar-logo'>
                    LOGO
                </div>
                <div className='navbar-list'>
                    <ul>
                        <li><a href='#'>Magazani Yarat</a></li>
                        <li><a href='#'>Yardim</a></li>
                    </ul>
                </div>
                <div className='navbar-country'>
                    <ul>
                        <li><img src={Flag}/>Istanbul</li>
                        <li>TR</li>
                        <li>TRY</li>
                        <FaAngleDown/>
                    </ul>
                </div>
                <div className='navbar-search'>
                    <Search/>
                </div>
                <div className='navbar-box'>
                    <div className='siparis'>
                        <img src={Siparis} className="siparis-pic"/>
                        <p>Siparislerim</p>
                    </div>
                    <div className='favori'>
                        <img src={Favori} className="favori-pic"/>
                        <p>Favorilerim</p>
                    </div>
                    <div className='sepet'>
                        <img src={Sepet} className="sepet-pic"/>
                        <p>Sepetim</p>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;