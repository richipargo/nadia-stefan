import '../style_components/boda.css';
// import Map from './Map';

const Boda = () => {
  return (
    <div className="boda-container">
      <div className="boda-header-container">
        <div className="boda-header">
          <h1>
            ¡Hola! Estamos muy felices y agradecidos de que nos acompañes a celebrar el día de
            nuestra boda. Aquí encontrarás todos los detalles del evento.
          </h1>
          <p>¡Esperamos verte en enero para celebrar en grande!</p>
          <p className="signature">- Nadia & Stefan</p>
        </div>
      </div>

      {/*Ceremonia/Recepción*/}
      <div className="ceremonia-recepcion-container">
        <div className="ceremonia-recepcion">
          <div className="ceremonia-recepcion-text">
            <h2 className="boda-h2">Ceremonia & Recepción</h2>
            <p className="main-info">Sábado 27 de enero, 2024 a las 13:30hrs</p>
            <p className="main-info">Jardín Xolatlaco</p>
            <p className="note">
              Carretera Tepoztlán - Amatlán no. 1000 - B Amatlán de Quetzalcóatl, Tepoztlán Morelos
              CP 62525
            </p>
            <ul className="boda-ul">
              <li>Te esperamos a las 13:30hrs para la ceremonia.</li>
              <li>De ahí pasaremos al cóctel y recepción.</li>
            </ul>
            <div className="como-llegar">
              <h3 className="boda-h3">Cómo llegar</h3>
              <a href="https://waze.com/ul/h9g3ecwhep" target="_blank" rel="noreferrer">
                <button className="map-btn">Sigue Waze</button>
              </a>
              <a href="https://maps.app.goo.gl/ENe7YmdFubLPBpYC8" target="_blank" rel="noreferrer">
                <button className="map-btn">Sigue Google Maps</button>
              </a>
              <p className="note">
                El destino debe ser “Jardín Xolatlaco” (NO solamente “Xolatlaco”, ya que te puede
                llevar a otro lugar).
              </p>
              <ul className="boda-ul">
                <li>
                  Por favor toma en cuenta que los sábados suele haber mucho tráfico en el centro de
                  Tepoztlán, te pedimos considerarlo dentro de tus planes.
                </li>
                <li>
                  Al llegar, Jardín Xolatlaco se encontrará a mano derecha; verás una puerta grande
                  de madera y un letrero que dice “XOLATLACO”.
                  <img
                    className="entrance-img"
                    src="./public/xolatlaco1.png"
                    alt="Puerta grande de madera en la entrada de Jardín Xolatlaco."
                  />
                </li>
                <li>
                  Habrá servicio de valet parking, pero te recomendamos llegar en taxi si vas a
                  tomar durante el fiestón. A la salida habrá servicio de camionetas hacia los
                  hoteles en los siguientes horarios: 12am, 2am, y X.{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="ceremonia-recepcion-img-container">
            <img
              className="ceremonia-recepcion-img"
              src="./MER_5758.jpg"
              alt="Nadia y Stefan en Oaxaca"
            />
          </div>
        </div>
      </div>
      {/*Dresscode*/}
      <div className="dresscode-container">
        <div className="dresscode">
          <div className="dresscode-img-container">
            <img className="dresscode-img" src="./MER_5845.jpg" alt="Nadia y Stefan en Oaxaca" />
          </div>
          <div className="dresscode-text">
            <h2 className="boda-h2">Código de vestimenta</h2>
            <p className="main-info">Formal</p>
            <ul className="boda-ul">
              <li>Mujeres: vestido midi o largo (de día) </li>
              <li>Hombres: traje</li>
            </ul>
            <p className="note">
              Durante el día esperamos que el clima esté bonito/caluroso, pero en la noche hará
              frío, ¡por favor lleva algo abrigador!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boda;
