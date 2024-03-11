import React, { useState } from 'react';
import './Login.css';
import login from '../../assets/login.png';
import { Link } from  'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reset = () => {
    const [pass , setPass] = useState(" ");

    const [email , setEmail] = useState(" ");
    

    const userVerify = () => {
        if(pass.trim().length < 5) {
            toast.error("Password must contain at least 5 characters");
        } else if (!email.trim()) {
            toast.error("Email is required");
        } else if (email.includes(" ")) {
            toast.error("Invalid email format");
        }
        // Add more conditions if needed
    }


    const handleSubmit =()=>{
        userVerify();
        console.log(email , pass);
    }
    return (
        <div id="container">
            <div id="image">
                <img src={login} alt="Login Image" />
            </div>


            <div id="login-form" style={{ flex: 1, padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginLeft: '45 0px', position:'relative',top:'-450px',width:'30%',left:"40%"}}>
            <h2 style={{position:'relative',left:'-10%'}}>Reset Password</h2>
           <form  onSubmit={handleSubmit}>
           

          <label style={{ display: 'block', marginBottom: '10px' }}> Password:</label>
          <input
            type="password"
            placeholder="password"
            id="password" name="password" required  value={pass} onChange={(e)=>{setPass(e.target.value)}}
            style={{ width:' 96%', padding: '8px', marginBottom: '20px' }}
          />
<br />
          <div className="butt" style={{position:'relative',left:'2%'}}>
          <button  onClick={handleSubmit}
            type="button"
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom:'20px',
              
            }}
          >
            Login
          </button>

          <Link to='/reset'><button
            type="reset"
            style={{
              padding: '10px',
              position:'relative',
              left:'30px',
              background: 'rgb(206,14,14)',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom:'20px',
            }}
          >
            Reset
          </button></Link>
          </div>
        </form>
        <p style={{color:'black'}}>Already have an account? <Link style={{color:'rgb(206,14,14)'}} to="/login">Login</Link></p>
      </div>
      <ToastContainer />
        </div>
    );
};

export default Reset;

