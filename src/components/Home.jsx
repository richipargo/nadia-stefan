import '../style_components/home.css';
import Hero from './Hero';
import Countdown from './Countdown';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Countdown />
      <p className="when-where">
        27 Enero, 2024. 2:00<span className="pm-span"> pm</span> | Jardín Xolatlaco
      </p>
    </div>
  );
};
export default Home;
