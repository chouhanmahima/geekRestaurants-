import React from 'react'
import './Navbar.css';
import NavLogo from './../assets/logo/NavLogo.svg'

const Navbar = () => {
  return (
     <nav>
        <div className="nav-main">
            <div className="nav-title">
                <img src={NavLogo} alt="GeekFood-logo"></img>
                <h1>GeekFoods</h1>
            </div>

            <div>
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Quote</a></li>
                    <li><a href="/">Restaurant</a></li>
                    <li><a href="/">Foods</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

            <div className="nav-button">
                <button>Get Started</button>
            </div>
        </div>
     </nav>
  )
}

export default Navbar