import '../style_components/rsvp-btn.css';
import { Link } from 'react-router-dom';

const RsvpBtn = () => {
  return (
    <Link to="/rsvp">
      <button className="rsvp-btn">RSVP</button>
    </Link>
  );
};

export default RsvpBtn;
