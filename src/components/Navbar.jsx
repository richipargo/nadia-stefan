import '../style_components/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logo-container" to="/">
        <img className="logo" src="../ns-logo.png" alt="N&S logo" />
      </Link>
      <ul className="nav-list" id="nav-list">
        <li>
          <Link to="/boda">Boda</Link>
        </li>
        <li>
          <Link to="/estadia">Estadía</Link>
        </li>
        <li>
          <Link to="/mesa-regalos">Mesa de regalos</Link>
        </li>
        <li>
          <Link to="/rsvp">Rsvp</Link>
        </li>
      </ul>

      {/*Hamburger menu*/}
      <div className="menu-btn" id="menu-btn">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
