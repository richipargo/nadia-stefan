import '../style_components/boda.css';
import Map from './Map';

const Boda = () => {
  return (
    <div className="boda-container">
      <div className="boda-title">
        <h1>
          Estamos muy felices y agradecidos de que nos acompañen a celebrar el día de nuestra boda.
        </h1>
      </div>
      {/*Cuando y Dónde*/}
      <div className="cuando-donde-container">
        {/*Cuando y Dónde initial info*/}
        <div className="cuando-donde-text">
          <h2>Cuándo y Dónde</h2>
          <p>Sábado 27 de enero, 2024</p>
          <p>13:30 hrs.</p>
          <p>Jardín Xolatlaco</p>
          <p>
            Carretera Tepoztlán - Amatlán no. 1000 - B Amatlán de Quetzalcóatl, Tepoztlán Morelos CP
            62525
          </p>
        </div>
        {/*Cuando y Dónde map*/}
        <div className="cuando-donde-map">
          <Map />
        </div>
        {/*Cómo llegar*/}
        <div className="como-llegar">
          <div className="como-llegar-text">
            <h3>Cómo llegar</h3>
            <p>
              Sigue{' '}
              <a
                className="address-link"
                href="https://waze.com/ul/h9g3ecwhep"
                target="_blank"
                rel="noreferrer"
              >
                Waze
              </a>{' '}
              ó{' '}
              <a
                className="address-link"
                href="https://maps.app.goo.gl/ENe7YmdFubLPBpYC8"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </p>
            <p>
              El destino debe ser “Jardín Xolatlaco” (NO solamente “Xolatlaco”, ya que te puede
              llevar a otro lugar).
            </p>
            <p>
              Por favor tomen en cuenta que los sábados suele haber mucho tráfico en el centro de
              Tepoztlán, les pedimos considerarlo dentro de sus planes.
            </p>
            <p>
              Habrá servicio de valet parking para quienes lleven coche, pero recomendamos llegar en
              taxi/Uber si es que piensan tomar durante el fiestón. A la salida, habrá servicio de
              camionetas hacia los hoteles en los siguientes horarios: X, X, y X.{' '}
            </p>
            <p>
              Al llegar, Jardín Xolatlaco se encontrará a mano derecha, verán una puerta grande de
              madera y un letrero que dice “XOLATLACO”
            </p>
          </div>
          <div className="como-llegar-images">
            <img
              src="./public/xolatlaco1.png"
              alt="Puerta grande de madera en la entrada de Jardín Xolatlaco"
            />
            {/* <img src="./public/xolatlaco2.png" alt="" /> */}
          </div>
        </div>
      </div>
      {/*Ceremonia/Recepción*/}
      <div className="event-container">
        <h2>Ceremonia / Recepción</h2>
        <p>Todo el evento será en Jardín Xolatlaco.</p>
        <p>Los esperamos a las 13:30hrs para la ceremonia.</p>
        <p>De ahí pasaremos al cóctel y recepción.</p>
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
