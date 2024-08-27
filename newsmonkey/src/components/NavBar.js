

import React from 'react'
import Logo from"./logo.png"
import './Navbar.css'
import LogOut from './Logout.svg'
import{useNavigate}from"react-router-dom"
export default function NavBar() {

  const navigate=useNavigate();


  const onLogoutLink=()=>{
    navigate("/");
  }
  return (
    <div>
<nav className="navbar">
  <div className='navbardata'>
  <div className="container-fluid"> 
    <a className="navbar-brand" >
      <img src={Logo} alt="Logo" width="200px" height="150px" className="img-logo"/>
    <p className='title'><b>News Monkey</b></p> 
    </a>

  </div>
  <div className='logout-container'>
  <img src={LogOut} alt='logout' className='logouts' onClick={onLogoutLink} />
  </div>
  </div>
</nav>
    </div>
  )
}
