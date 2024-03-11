import React from 'react';
import './About.css'; // Import your CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1 style={{color:'rgb(206,14,14)'}}>Drive Home with Your Perfect Car</h1>
                <h2 style={{color:'black'}}>Explore Our Extensive Inventory</h2>
                <p>Get behind the wheel of your dream car. Explore our extensive inventory and take the first step towards your next adventure.</p>
                <div className="contact-info">
                    <p>Email: info@example.com</p>
                    <p>Contact: +1 123-456-7890</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
