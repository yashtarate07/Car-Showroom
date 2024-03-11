import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/signup.png'
import './Signup.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    Confirmpassword: '' // Added Confirmpassword field
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verifySignup = () => {
    const { password, email, Confirmpassword } = formData;
    if (password.trim().length < 5) {
      toast.error("Password must contain at least 5 characters");
      return false;
    } else if (!email.trim()) {
      toast.error("Email is required");
      return false;
    } else if (email.includes(" ")) {
      toast.error("Invalid email format");
      return false;
    } else if (password !== Confirmpassword) { // Check if password and confirm password match
      toast.error("Password and confirm password should be same");
      return false;
    }
    return true;
  }

  const handleReset = () => {
    // Reset the form fields
    setFormData({
      username: '',
      email: '',
      password: '',
      Confirmpassword: '' // Reset Confirmpassword field
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = verifySignup();
    if (isValid) {
      try {
        const { username, email, password, Confirmpassword } = formData;
        
       console.log(username,email,password , Confirmpassword);
       const response =await axios.post('http://localhost:5000/api/register',{username,email,password,Confirmpassword});
       console.log("respone is:",response)
      } catch (error) {
        console.error("Error:", error);
      }
    }
    toast("user created")
  };

  return (
    <div
      id="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div id="image" style={{ flex: 1 }}>
        <img src={signup} alt="Login Image" style={{ width: '120%', height: 'auto', paddingLeft: '150px', position: 'relative', left: '-50px' }} />
      </div>

      <div id="signup-form" style={{ flex: 1, padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '100px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Username:</label>
          <input
            type="text"
            id="username" name="username" placeholder="username" value={formData.username} onChange={handleChange} required
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email" name="email" value={formData.email} onChange={handleChange} required
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}> Password:</label>
          <input
            type="password"
            placeholder="Create your password"
            id="password" name="password" value={formData.password} onChange={handleChange} required
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />
           <label style={{ display: 'block', marginBottom: '10px' }}>Confirm Password:</label>
           <input
  type="password"
  placeholder="Confirm password"
  id="confirmpassword" name="Confirmpassword" value={formData.Confirmpassword} onChange={handleChange} required
  style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
/>

          <button
            type="submit"
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '10px',
              position: 'relative',
              left: '50px',
              background: 'rgb(206,14,14)',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Reset
          </button>
        </form>
        <p style={{ color: 'black' }}>Already have an account? <Link style={{ color: 'rgb(206,14,14)' }} to="/login">Login</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
