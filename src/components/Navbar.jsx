import '../style_components/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a class="logo-container" href="/">
        <img class="logo" src="../ns-logo.png" alt="N&S logo" />
      </a>
      <ul class="nav-list" id="nav-list">
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
    </nav>
  );
};

export default Navbar;
