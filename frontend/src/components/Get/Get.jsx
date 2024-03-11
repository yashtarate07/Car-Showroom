import React, { useState } from 'react';
import './Get.css';
import rolls from '../../assets/get/rolls.jpg';
import mercedes from '../../assets/get/mercedes.jpeg';
import bmw from '../../assets/get/bmw.jpg';
import ferrari from '../../assets/get/ferrari.jpg';
import bentley from '../../assets/get/bentley.jpg';
import rangerover from '../../assets/get/rangerover.jpg';
import lamborghini from '../../assets/get/lamborghini.jpg'
import Maserati from '../../assets/get/masarati.jpg'
const Get = () => {
  const [myimg, setMyimg] = useState(null); // Changed to null as initial state
  return (
    <div className='mainget'>
      <div className="upget">
        <h1>Get All Luxurious Brands Cars </h1>
        <button>View All</button>
      </div>
      <div className="lowerget">
        <div className="list-container">
          <ul className="custom-scrollbar">
            <li onClick={() => { setMyimg(mercedes) }}>Mercedes-Benz</li> {/* Changed to set image itself */}
            <li onClick={() => { setMyimg(rolls) }}>Rolls-Royce</li>
            <li onClick={() => { setMyimg(bentley) }}>Bentley</li>
            <li onClick={() => { setMyimg(lamborghini) }}>Lamborghini</li>
            <li onClick={() => { setMyimg(Maserati) }}>Maserati</li>
            <li onClick={() => { setMyimg(ferrari) }}>Ferrari</li>
            <li onClick={() => { setMyimg(bmw) }}>BMW</li>
            <li onClick={() => { setMyimg(rangerover) }}>Range Rover</li>
          </ul>
        </div>
        <div className="rightmain">
          {myimg && <img src={myimg} alt="" />} {/* Added conditional rendering */}
        </div>
      </div>
    </div>
  );
};

export default Get;
