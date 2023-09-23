import '../style_components/details-btn.css';
import { Link } from 'react-router-dom';

const DetailsBtn = () => {
  return (
    <Link to="/boda">
      <button className="details-btn">Más detalles</button>
    </Link>
  );
};

export default DetailsBtn;
