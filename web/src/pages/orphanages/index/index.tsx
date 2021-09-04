import { useState } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../../assets/images/map-marker.svg';

import 'leaflet/dist/leaflet.css';

import './styles.css';

const OrphanagesIndex: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    -3.7436121, -38.5194538,
  ]);

  return (
    <div id="orphanages-index">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy" />

          <h2>Choose an orphanage on the map</h2>
          <p>Many children are waiting for your visit</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <MapContainer
        center={currentPosition}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <Link to="/orphanages/new" className="new-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesIndex;
