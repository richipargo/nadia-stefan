import '../style_components/boda.css';
import Map from './Map';

const Boda = () => {
  return (
    <div className="boda-container">
      <div className="boda-title">
        <h1>
          ¡Hola! Estamos muy felices y agradecidos de que nos acompañes a celebrar el día de nuestra
          boda. Aquí encontrarás todos los detalles el evento.
        </h1>
        <p className="boda-title-p">¡Esperamos verte en enero para celebrar en grande!</p>
        <p className="signature">- Nadia & Stefan</p>
      </div>

      {/*Ceremonia/Recepción*/}
      <div className="when-where-container">
        <div className="when">
          <h2>Ceremonia & Recepción</h2>
          <h3>Cuándo</h3>
          <p>Sábado 27 de enero, 2024</p>
          <p>Te esperamos a las 13:30hrs para la ceremonia.</p>
          <p>De ahí pasaremos al cóctel y recepción.</p>
        </div>
        <div className="where">
          <h3>Dónde</h3>
          <p>Jardín Xolatlaco</p>
          <p>
            Carretera Tepoztlán - Amatlán no. 1000 - B Amatlán de Quetzalcóatl, Tepoztlán Morelos CP
            62525
          </p>
          <button>Sigue Waze</button>
          <button>Sigue Google Maps</button>
          <p>
            El destino debe ser “Jardín Xolatlaco” (NO solamente “Xolatlaco”, ya que te puede llevar
            a otro lugar).
          </p>
          <p>
            Por favor toma en cuenta que los sábados suele haber mucho tráfico en el centro de
            Tepoztlán, te pedimos considerarlo dentro de tus planes.
          </p>
          <p>
            Habrá servicio de valet parking para quienes lleven coche, pero te recomendamos llegar
            en taxi/Uber si vas a tomar durante el fiestón. A la salida habrá servicio de camionetas
            hacia los hoteles en los siguientes horarios: X, X, y X.{' '}
          </p>
          <p>
            Al llegar, Jardín Xolatlaco se encontrará a mano derecha, verás una puerta grande de
            madera y un letrero que dice “XOLATLACO”
          </p>
        </div>
        <div className="where-img">
          <img
            src="./public/xolatlaco1.png"
            alt="Puerta grande de madera en la entrada de Jardín Xolatlaco."
          />
        </div>
      </div>
      {/*Dresscode*/}
      <div className="dresscode-container">
        <h2>Dresscode</h2>
        <p>Formal</p>
        <p>Mujeres - vestido midi o largo (de día) </p>
        <p>Hombres - traje</p>
        <p>
          Durante el día esperamos que el clima esté bonito/caluroso, pero en la noche hará frío,
          ¡por favor lleven algo abrigador!{' '}
        </p>
      </div>

      <img className="hero-img" src="./ns-243.jpg" alt="Nadia y Stefan en Oaxaca" />
    </div>
  );
};

export default Boda;
