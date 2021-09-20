import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

// eslint-disable-next-line object-curly-newline
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../../assets/images/map-marker.svg';

import mapMarker from '../../../utils/mapMarker';

import Orphanage from '../../../types/entities/orphanage/orphanage';
import OrphanageIndexResponse from '../../../types/responses/orphanages/index';

import api from '../../../services/api';

import './styles.css';

const OrphanagesIndex: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    NaN,
    NaN,
  ]);

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    api
      .get<OrphanageIndexResponse>('orphanages')
      .then((response) => setOrphanages(response.data.orphanages))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on loading orphanages. Please refresh the page');
      });
  }, []);

  function coordsLoaded() {
    return (
      !Number.isNaN(currentPosition[0]) && !Number.isNaN(currentPosition[1])
    );
  }

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

      {coordsLoaded() ? (
        <MapContainer
          center={currentPosition}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {orphanages.map((orphanage) => (
            <Marker
              icon={mapMarker}
              position={[
                orphanage.address.latitude,
                orphanage.address.longitude,
              ]}
              key={orphanage.key}
            >
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxWidth={240}
              >
                <p>{orphanage.name}</p>
                <Link to={`/orphanages/${orphanage.key}`}>
                  <FiArrowRight size={20} color="#000" />
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        'LOADING MAP'
      )}

      <Link to="/orphanages/new" className="new-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesIndex;
