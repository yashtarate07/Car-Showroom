import React from 'react';
import './Hero.css'; // Assuming your CSS file is in a 'styles' folder
import heros from '../../assets/hero.png';
import { FaPlayCircle } from 'react-icons/fa';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import {motion}  from  "framer-motion";
const Hero = () => {
  return (
    <div className='hero' style={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
      <div className='hero-container'>
        <div className='hero-left'>
          <h1>Drive Home with <br />Your <span style={{color:'rgb(206,14,14)'}}>Perfect Car.</span></h1>
          <p>Get behind the wheel of your dream car. Explore <br/>our extensive inventory and take the first step <br/> towards your next adventure.</p>
          <Link to='/explore'><button id="explore"className='explore btn'>Explore More</button></Link>
          <button className='play-btn' ><FaPlayCircle  /><span style={{fontSize:"25px", marginLeft: "50px"}}>Watch Video</span></button>
        </div>
        <motion.div
        initial={{x:"2rem",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
           duration:3,
           type:'spring'
        }}
         className='hero-right'>
          <img src={heros} alt='hero' />
        </motion.div>
      </div>
      <Search />
    </div>
  );
};

export default Hero;
