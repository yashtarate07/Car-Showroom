import React from 'react';
import './Service.css';
import choose from '../../assets/choose.png';
import mechanic from '../../assets/mechanic.png';
import popular from '../../assets/popular.png';
import price from '../../assets/price.png';
import Quality from '../../assets/quality.png';

const Service = () => {
  return (
    <div className='service'>
      <div className="left-service">
        <h1>We Are Dedicated to <br /> Provide Quality Service.</h1>
        <p>At our car marketplace, we bring you the best vehicles from top brands.<br/> Find the car that suits your style and budget.</p>
        <img src={choose} alt="service" />
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <img src={mechanic} alt="mechanic" />
          <h2>Certified Mechanics</h2>
          <p>Browse a wide selection of new and used cars from trusted dealers and sellers.</p>
        </div>

        <div className="flex-item">
          <img src={price} alt="price" />
          <h2>Reasonable Price</h2>
          <p>Find cars at reasonable prices to suit your budget and preferences.</p>
        </div>

        <div className="flex-item">
          <img src={popular} alt="popular" />
          <h2>Popular Models</h2>
          <p>Explore popular car models and discover the latest trends in the automotive industry.</p>
        </div>

        <div className="flex-item">
          <img src={Quality} alt="quality" />
          <h2>High Quality Vehicles</h2>
          <p>Find high-quality vehicles that are thoroughly inspected and certified for your peace of mind.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
