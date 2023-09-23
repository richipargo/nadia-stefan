import { hotels } from './Hotels';
import '../style_components/hotels.css';

// const Estadia = () => {
//   return (
//     <div className="estadia">
//       <h2>Estadía aquí</h2>
//     </div>
//   );
// };

// export default Estadia;

const Estadia = () => {
  return (
    <div className="hotels-container">
      {hotels.map((item, index) => (
        <div className="hotel-container" key={index}>
          <h3>{item.name}</h3>
          <p>Distancia del evento: {item.distance}</p>
          <p>Dirección: {item.address}</p>
          <p>Tel: {item.tel}</p>
          <div className="hotel-img-container">
            <a href={item.website}>
              <img className="hotel-img" src={item.src}></img>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Estadia;
