import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

// eslint-disable-next-line object-curly-newline
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../../assets/images/map-marker.svg';

import mapMarker from '../../../utils/mapMarker';

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

        <Marker icon={mapMarker} position={currentPosition}>
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            <p>First Orphanage</p>
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#000" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orphanages/new" className="new-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesIndex;
