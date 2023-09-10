import '../style_components/home.css';
import Hero from './Hero';
import Countdown from './Countdown';
import CountdownTimer from './CountdownTimer';
import RsvpBtn from './RsvpBtn';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <CountdownTimer />
      <Countdown />
      <p className="when-where">
        27 Enero, 2024. 14:00<span className="pm-span"> hrs</span> | Jardín Xolatlaco
      </p>
      <RsvpBtn />
    </div>
  );
};
export default Home;
