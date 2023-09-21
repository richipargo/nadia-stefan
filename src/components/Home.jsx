import '../style_components/home.css';
import Hero from './Hero';
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
      <div>
        <img className="home-bouquet" src="./public/bouquet2-min-ud.png" alt="flower bouquet"></img>
      </div>
      {/* <RsvpBtn /> */}
    </div>
  );
};
export default Home;
