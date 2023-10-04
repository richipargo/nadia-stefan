import '../style_components/home.css';
import Hero from './Hero';
import CountdownTimer from './CountdownTimer';
import DetailsBtn from './DetailsBtn';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <p className="when-where">
        27 Enero, 2024. 1:30<span className="pm-span"> pm</span> | Jardín Xolatlaco
      </p>
      <CountdownTimer />
      <DetailsBtn />
    </div>
  );
};
export default Home;
