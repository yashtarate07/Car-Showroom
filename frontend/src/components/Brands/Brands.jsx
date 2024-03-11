import React from 'react'
import './Brands.css'
import audi from '../../assets/audi_logo.png'
import mercedes from '../../assets/mercedes_logo.png'
import lamborghini from '../../assets/lamborghini_logo.png'
import BMw from '../../assets/BMW_logo.png';
const Brands = () => {
  return (
    <div className='mainbrand'>
      <div><img src={audi} alt="" /></div>
      <div><img src={mercedes} alt="" /></div>
      <div><img src={lamborghini} alt="" /></div>
      <div><img src={BMw} alt="" /></div>
    </div>
  )
}

export default Brands
