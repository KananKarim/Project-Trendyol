import React from 'react'
import {MdReorder} from 'react-icons/md'
import './style.css'

const Section1 = () => {
  return (
    <div className='section'>
            <ul>
                <li><MdReorder className='icon'/></li>
                <li><a href='#'>Kadın</a></li>
                <li><a href='#'>Erkek</a></li>
                <li><a href='#'>Çocuk</a></li>
                <li><a href='#'>Ayakkabi & Çanta</a></li>
                <li><a href='#'>Saat & Aksesuar</a></li>
                <li><a href='#'>Spor & Outdoor</a></li>
                <li><a href='#'>Kitap & Hobi</a></li>
                <li><a href='#'>Oto & Bahçe</a></li>
                <li><a href='#'>Elektronik</a></li>
                <li><a href='#'>Kampanyalar</a></li>
                <li><a href='#'>Indirimler</a></li>
                <li><a href='#'>Blog</a></li>
            </ul>
    </div>
  )
}

export default Section1