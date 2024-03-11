import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card/Card.jsx';
import data from '../../Data/data.js';
import './Explore.css'

import audi from '../../assets/logo/audi.png';
import maserati from '../../assets/logo/maserati.png';
import BMW from '../../assets/logo/bmw.png';
import mercedes from '../../assets/logo/mercedes.png';
import Ferrari from '../../assets/logo/ferrari.png';
const VehicleCarousel = () => {
  const settings = {
    dots: data.length <= 3 ? false : true,
    infinite: data.length <= 3 ? false : true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: data.length <= 3 ? false : true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: data.length <= 3 ? false : true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore our Vehicles</h1>
         <div className="button-row">
         <button className="btn btn-active"><img src={audi} alt="" /> Audi</button>
         <button className="btn btn-active"><img src={BMW} alt="" className='logo' /> BMW</button>
         <button className="btn btn-active"><img src={mercedes} alt="" className='logo' />Mercedes</button>
         <button className="btn btn-active"><img src={maserati} alt="" className='logo'/>maserati</button>
         <button className="btn btn-active"><img src={Ferrari} alt=""className='logo' />Ferrari</button>
         <button className="btn btn-active">Explore 10+</button>
         </div>

      <Slider {...settings}>
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className="w-64">
            <Card item={item} />
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VehicleCarousel;
