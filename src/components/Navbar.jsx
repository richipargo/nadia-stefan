import '../style_components/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logo-container" to="/">
        <img className="logo" src="../ns-logo-green.png" alt="N&S logo" />
      </Link>
      <ul className="nav-list" id="nav-list">
        <li>
          <Link to="/boda">Boda</Link>
        </li>
        <li>
          <Link to="/estadia">Estadía</Link>
        </li>
        <li>
          <Link to="/regalos">Mesa de regalos</Link>
        </li>
        <li>
          <Link to="/rsvp">Rsvp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
