import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../../../assets/images/map-marker.svg';

import './styles.css';

const OrphanageNew: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    -3.7436121, -38.5194538,
  ]);

  const mapMarker = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [42, 42],
    popupAnchor: [0, -10],
  });

  const { goBack } = useHistory();

  return (
    <div id="orphanage-new">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <form className="orphanage-new-form">
          <fieldset>
            <legend>Infos</legend>

            <MapContainer
              center={currentPosition}
              style={{ width: '100%', height: 280 }}
              zoom={15}
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

            <div className="input-block">
              <label htmlFor="name">
                Name
                <input id="name" />
              </label>
            </div>

            <div className="input-block">
              <label htmlFor="about">
                About
                <span>300 characters maximum</span>
                <textarea id="about" maxLength={300} />
              </label>
            </div>

            <div className="input-block">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="images">Images</label>

              <div className="images-container" />

              <button type="button" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visiting</legend>

            <div className="input-block">
              <label htmlFor="instructions">
                Intructions
                <textarea id="instructions" />
              </label>
            </div>

            <div className="input-block">
              <label htmlFor="schedule">
                Schedule
                <input id="schedule" />
              </label>
            </div>
          </fieldset>

          <button type="submit" className="submit">
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default OrphanageNew;
