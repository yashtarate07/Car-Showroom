import React from 'react'
import "./Card.css"
const Card = ({item}) => {
  return (
   <div className="maincard">
    <div className="card">
         <div className="up">
           <img src={item.img} alt="img" />
         </div>
         <div className="low">
           <h2>{item.name}</h2>
           <p>Release &nbsp;{item.release}</p>
           <p className='price'>${item.price}</p>
           <button>Discover</button>
         </div>
    </div>

   </div>
  )
}

export default Card
