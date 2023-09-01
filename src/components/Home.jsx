import '../style_components/home.css';
import Countdown from './Countdown';

const Home = () => {
  return (
    <div className="home">
      <Countdown />
      {/* <div className="countdown">
        <p>x días para celebrar juntos!</p>
      </div> */}
      <p>27 Enero, 2024. 2:00pm | Jardín Xolatlaco</p>
    </div>
  );
};
export default Home;
