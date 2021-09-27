import { FormEvent, useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import { MapContainer, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/sidebar';
import MapMarker from '../../../components/map/marker';

import './styles.css';

const OrphanageNew: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    NaN,
    NaN,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  function coordsLoaded() {
    return (
      !Number.isNaN(currentPosition[0]) && !Number.isNaN(currentPosition[1])
    );
  }

  async function createOrphanage(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="orphanage-new">
      <Sidebar />

      <main>
        <form className="orphanage-new-form" onSubmit={createOrphanage}>
          <fieldset>
            <legend>Infos</legend>

            {coordsLoaded() ? (
              <MapContainer
                center={currentPosition}
                style={{ width: '100%', height: 280 }}
                zoom={15}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker
                  currentPosition={currentPosition}
                  setCurrentPosition={setCurrentPosition}
                />
              </MapContainer>
            ) : (
              <h1>LOADING MAP</h1>
            )}

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
