import React from 'react'
import './Add.css'
import urus from '../../assets/urus.png';
import right from '../../assets/right.png'
import { Link } from 'react-router-dom';
const Add = () => {
  return (
    <div className='mainadd' style={{marginTop:"50px"}}>
      <div className="leftadd ">
      <img src={urus} alt="" />
        
      </div>
      <div className="rightadd">
      <h1>World Largest Car <br/>Brands Marketplace.</h1>
         <p>At our car marketplace.we bring you the best vehicles <br/>from top brands.Find the car that suits your style.</p>

         <ul>
             <li><img src={right} className="rightimg" />We have a safe payment system</li>
             <li><img src={right} className="rightimg"/>A large collection of cars available</li>
             <li><img src={right} className="rightimg" s/>We have the best drivers in the world</li>
         </ul>
         <Link to='/service'><button>Read More</button></Link>
      </div>
    </div>
  )
}

export default Add
