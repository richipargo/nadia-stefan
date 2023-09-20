import '../style_components/map.css';

const Map = () => {
  return (
    <div className="responsive-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.038318312489!2d-99.07077792520084!3d18.973915055170192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0d0d185a2081%3A0x14dbb94b8d3adf8a!2sJard%C3%ADn%20Xolatlaco!5e0!3m2!1sen!2sse!4v1694205308115!5m2!1sen!2sse"
        width="550"
        height="300"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map;
