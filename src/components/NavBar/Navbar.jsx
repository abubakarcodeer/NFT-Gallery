import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className='nav-container'>
        <div className="logo">
            <span className='nft-side'>NFT</span> <span>Gall</span>
        </div>
        <nav className="navbar-items">
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>Wallet</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar