import '../style_components/home.css';
import Hero from './Hero';
import CountdownTimer from './CountdownTimer';
import DetailsBtn from './DetailsBtn';
import RsvpBtn from './RsvpBtn';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <p className="when-where">
        27 Enero, 2024. 1:30<span className="pm-span"> pm</span> | Jardín Xolatlaco
      </p>
      <DetailsBtn />
      <CountdownTimer />
      {/* <RsvpBtn /> */}
    </div>
  );
};
export default Home;
