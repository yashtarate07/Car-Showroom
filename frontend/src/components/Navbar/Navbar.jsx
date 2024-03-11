import React from 'react'
import { FiHeart } from "react-icons/fi";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100" style={{ background:" radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)"}}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><Link to='/service'>Services</Link></li>
      <li>
        <details>
          <summary>Brands</summary>
          <ul className="p-2">
            <li><a>Audi</a></li>
            <li><a>Mercedes</a></li>
            <li><a>BMW</a></li>
            <li><a>Rolly-Royce</a></li>
            <li><a>Bentley</a></li>
            <li><a>Ford</a></li>
            <li><a>Lamborghini</a></li>
            <li><a>Ferrari</a></li>
          </ul>
        </details>
      </li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    </div>
    <a className="btn btn-ghost text-xl"style={{color:'white'}}>LU<span style={{margin:'-8px',color:'#c8102e'}}>X</span>U</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><Link to='/service'>Services</Link></li>
      <li>
        <details>
          <summary>Brands</summary>
          <ul className="p-2">
            <li><Link to='/audi'>Audi</Link></li>
            <li><a>Mercedes</a></li>
            <li><a>BMW</a></li>
            <li><a>Rolly-Royce</a></li>
            <li><a>Bentley</a></li>
            <li><a>Ford</a></li>
            <li><a>Lamborghini</a></li>
            <li><a>Ferrari</a></li>
          </ul>
        </details>
      </li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
 
  <div className="navbar-end">
    <Link to='/login' className="btn" style={{color:"white"}}>Login</Link>
  </div>
</div>
    </div>
  )
}

export default Navbar
