import hotel1 from '../../public/hotels/1-amomoxtli.jpg';
import hotel2 from '../../public/hotels/2-hostal-luz.jpg';
import hotel3 from '../../public/hotels/3-casa-fernanda.jpg';
import hotel4 from '../../public/hotels/4-posada-tepoz.jpg';
import hotel5 from '../../public/hotels/5-buena-vibra.jpg';
import hotel6 from '../../public/hotels/6-posada-valle.jpg';
import hotel7 from '../../public/hotels/7-valle-mistico.jpg';
import hotel8 from '../../public/hotels/8-quinta-gyo.jpg';
import hotel9 from '../../public/hotels/9-amate-camp.jpg';
import hotel10 from '../../public/hotels/10-real-valle.jpg';
import hotel11 from '../../public/hotels/11-xacalan.jpg';
import hotel12 from '../../public/hotels/12-pan-nuestro.jpg';
import hotel13 from '../../public/hotels/13-orquideas.jpg';
import hotel14 from '../../public/hotels/14-rincon-amate.jpg';

const hotelList = [
  {
    id: 1,
    name: 'Hotel Amomoxtli',
    address: 'Netzahualcoyotl 115, Valle de Atongo, 62520',
    website: 'https://amomoxtli.com/',
    tel: '739 395 0012',
    distance: '10 min',
    src: hotel1,
    alt: 'Hotel Amomoxtli',
  },
  {
    id: 2,
    name: 'Hostal de la Luz',
    address: 'Carrt. Federal Tepoztlan-Amatlan s/n, Km4, 62524',
    website: 'https://www.hostaldelaluzresort.com/',
    tel: '739 395 3374',
    distance: '6 min',
    src: hotel2,
    alt: 'Hostal de la Luz',
  },
  {
    id: 3,
    name: 'Casa Fernanda',
    address: 'De Niño Artillero 20, San Jose 62520',
    website: 'https://casafernanda.com/',
    tel: '55 4164 2544',
    distance: '13 min',
    src: hotel3,
    alt: 'Casa Fernanda',
  },
];

const Estadia = () => {
  return (
    <div className="estadia">
      <h2>Estadía aquí</h2>
    </div>
  );
};

export default Estadia;
