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
    <>
      {hotels.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Distancia del evento: {item.distance}</p>
          <img className="hotel-img" src={item.src}></img>
          <p>Dirección: {item.address}</p>
          <p>Tel: {item.tel}</p>
          <a href={item.website}>{item.website}</a>
        </div>
      ))}
    </>
  );
};
export default Estadia;
