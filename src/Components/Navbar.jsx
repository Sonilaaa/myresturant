import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hcTP1lktFeUVGMvhC0_U2jcDZOlV4HwZvWodL5qPHGpgtnktl52ERGf4dLOnIxrUYxs&usqp=CAU" alt="" height="80px" width="100px" />
    </div>
    <ul className="navbar-links">
      <li>
      <Link to="/">Home</Link>
      </li>

      <li>
      <Link to="/about">About </Link>
        </li>
      <li>
      <Link to="/menu">Menu</Link>
      </li>
      <li>
      <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to ="/reviews">Reviews</Link>
      </li>
      <li>
      <Link to="/contact">Contacts</Link>
      </li>
      <li>
      <Link to="/events">Events</Link>
      </li>
    </ul>
  </nav>

  )
}

export default Navbar