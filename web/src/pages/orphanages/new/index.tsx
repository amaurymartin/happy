import { useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/sidebar';
import mapMarker from '../../../utils/mapMarker';

import './styles.css';

const OrphanageNew: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    -3.7436121, -38.5194538,
  ]);

  return (
    <div id="orphanage-new">
      <Sidebar />

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
