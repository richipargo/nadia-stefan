import '../style_components/rsvp.css';

const Rsvp = () => {
  return (
    <div className="rsvp">
      <div className="rsvp-text">
        <h2 className="rsvp-h2">¿Podrás acompañarnos?</h2>
        <p className="rsvp-info">¡Te esperamos con toda la emoción y alegría del mundo!</p>
        <p className="rsvp-info">
          Por favor recuerda confirmar tu asistencia a través de WhatsApp.
        </p>
      </div>
      <img className="rsvp-img" src="./ns-243.jpg" alt="Nadia y Stefan en Oaxaca"></img>
    </div>
  );
};

export default Rsvp;
