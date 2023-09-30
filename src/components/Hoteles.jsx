import { hotelsData } from './HotelsData';
import '../style_components/hoteles.css';

const Hoteles = () => {
  return (
    <div className="hoteles-container">
      {hotelsData.map((item, index) => (
        <div className="hotel-container" key={index}>
          <h3 className="hotel-h3">{item.name}</h3>
          <p>A {item.distance} del evento en coche.</p>
          {/* <p>{item.address}</p> */}
          <p>Tel: {item.tel}</p>
          <a href={item.website} target="_blank" rel="noreferrer" className="website-hotel">
            Página web
          </a>
          <div className="hotel-img-container">
            <img className="hotel-img" src={item.src}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Hoteles;
