import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="contact-us-container">
            <div className="left">
            <Link className="btn btn-ghost text-xl"style={{color:'black',position:'relative',top:'-100px'}}>LU<span style={{margin:'-8px',color:'#c8102e'}}>X</span>U</Link>

            <h1>Drive Home with <br />Your <span style={{color:'rgb(206,14,14)'}}>Perfect Car.</span></h1>
          <p>Get behind the wheel of your dream car. Explore <br/>our extensive inventory and take the first step <br/> towards your next adventure.</p>
            </div>
            <div className="contact-us-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, please feel free to contact us using the form below:</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
