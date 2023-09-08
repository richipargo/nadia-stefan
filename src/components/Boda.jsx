import '../style_components/map.css';
import Map from './Map';

const Boda = () => {
  return (
    <div className="boda-container">
      <div>
        <h2>Cuándo y Dónde</h2>
        <p>Sábado 27 de enero, 2024</p>
        <p>13.30 hrs.</p>
        <p>Jardín Xolatlaco</p>
        <Map />
      </div>

      <div>
        <h2>Dresscode</h2>
        <p>Formal</p>
        <p>Recuerda traer algo abrigador para la noche.</p>
      </div>

      <div>
        <h2>¿Podrás acompañarnos?</h2>
        <p>¡Te esperamos con toda la emoción y alegría del mundo!</p>
        <p>Por favor confirma tu asistencia dando click en el botón de RSVP.</p>
      </div>
      <img className="hero-img" src="./ns-243.jpg" alt="Nadia y Stefan en Oaxaca" />
    </div>
  );
};

export default Boda;
