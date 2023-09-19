import '../style_components/home.css';
import Hero from './Hero';
import Countdown from './Countdown';
import CountdownTimer from './CountdownTimer';
import RsvpBtn from './RsvpBtn';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <p className="when-where">
        27 Enero, 2024. 13:30<span className="pm-span"> hrs</span> | Jardín Xolatlaco
      </p>
      <CountdownTimer />
      {/* <RsvpBtn /> */}
    </div>
  );
};
export default Home;
