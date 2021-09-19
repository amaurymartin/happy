import { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/sidebar';
import mapMarker from '../../../utils/mapMarker';

import './styles.css';

const OrphanageShow: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    -3.7436121, -38.5194538,
  ]);

  return (
    <div id="orphanage-show">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="First Orphanage"
          />

          <div className="images">
            <button className="active" type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="First Orphanage"
              />
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>First Orphanage</h1>
            <p>About First Orphanage</p>

            <div className="map-container">
              <MapContainer
                center={currentPosition}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                touchZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  icon={mapMarker}
                  position={currentPosition}
                  interactive={false}
                />
              </MapContainer>

              <footer>
                <Link to="/">See routes on Google Maps</Link>
              </footer>
            </div>

            <hr />

            <h2>Instructions to visit</h2>
            <p>Instructions one, two, and three</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Monday to Friday
                <br />
                8:00 AM to 06:00 PM
              </div>

              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Open on weekends
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Contact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrphanageShow;
