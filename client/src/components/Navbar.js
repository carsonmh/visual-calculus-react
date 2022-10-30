import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="sticky" id="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a href="">About</a>
          </li>
          <li className="nav-item">
            <a href="">Questions</a>
          </li>
          <li className="nav-item">
            <a href="">Log in</a>
          </li>
          <li className="nav-item">
            <a href="">Sign up</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
