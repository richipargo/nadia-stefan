import '../style_components/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo-container" href="/">
        <img className="logo" src="../ns-logo.png" alt="N&S logo" />
      </a>
      <ul className="nav-list" id="nav-list">
        <li>
          <a href="/boda">Boda</a>
        </li>
        <li>
          <a href="/hospedaje">Hospedaje</a>
        </li>
        <li>
          <a href="mesa-regalos">Mesa regalos</a>
        </li>
        <li>
          <a href="#rsvp">Rsvp</a>
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
