import '../style_components/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="initials-container">
        <div className="initials-date">
          <Link className="link-initials" to="/">
            <img className="initials" src="../ns-logo-green.png" alt="N&S logo" />
            {/* <p className="initials">N&S</p> */}
          </Link>
          <p className="date">27.01.2024</p>
        </div>
      </div>
      <footer>
        <p className="copyright">&copy; 2023 by LSM</p>
      </footer>
    </div>
  );
};

export default Footer;
