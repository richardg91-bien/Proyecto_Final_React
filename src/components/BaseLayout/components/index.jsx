import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
  <li><NavLink className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"} to="/">Home</NavLink></li>
  <li><NavLink className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"} to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;