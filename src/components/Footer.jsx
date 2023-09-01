import '../style_components/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Link className="link-initials" to="/">
        <p className="initials">N&S</p>
      </Link>
      <p className="date">27.01.2024</p>
      <footer>
        <p className="copyright">&copy; 2023 by LSM</p>
      </footer>
    </div>
  );
};

export default Footer;
