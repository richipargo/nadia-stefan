import Hoteles from './Hoteles';
import '../style_components/hospedaje.css';

const Hospedaje = () => {
  return (
    <div className="hospedaje-container">
      <div className="hospedaje-header">
        <h1 className="hospedaje-h1">Hospedaje</h1>
        <p className="hospedaje-header-p">
          Aquí te dejamos algunas recomendaciones de hoteles en Tepoztlán.
        </p>
        <p className="hospedaje-codigo">
          Para el hotel Amomoxtli, puedes usar el código de descuento <strong>WNS24</strong>.
        </p>
      </div>
      <Hoteles />
    </div>
  );
};
export default Hospedaje;
