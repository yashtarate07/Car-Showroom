import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
      <aside >
    <Link className="btn btn-ghost text-xl"style={{color:'white'}}>LU<span style={{margin:'-8px',color:'#c8102e'}}>X</span>U</Link>
      <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
    </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="Tell about that here" className="input input-bordered join-item" style={{backgroundColor:"white"}} /> 
        <button className="btn btn-primary join-item" style={{color:'white',backgroundColor:'rgb(204,14,14)',border:'none'}}>Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer
