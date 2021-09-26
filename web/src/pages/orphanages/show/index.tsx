import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/sidebar';
import mapMarker from '../../../utils/mapMarker';

import Orphanage from '../../../types/entities/orphanage/orphanage';
import OrphanagesShow from '../../../types/responses/orphanages/show';

import api from '../../../services/api';

// eslint-disable-next-line no-unused-vars

import './styles.css';

const OrphanageShow: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    -3.7436121, -38.5194538,
  ]);
  const [orphanage, setOrphanage] = useState<Orphanage>({} as Orphanage);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const params: { key: string } = useParams();

  useEffect(() => {
    api
      .get<OrphanagesShow>(`orphanages/${params.key}`)
      .then((response) => setOrphanage(response.data.orphanage))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on loading orphanage info. Please refresh the page');
      });
  }, [params]);

  if (Object.keys(orphanage).length === 0) return <p>Loading Orphanage info</p>;

  function hasImages() {
    if (Object.keys(orphanage).length === 0) return false;

    return orphanage.images.length > 0;
  }

  return (
    <div id="orphanage-show">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          {hasImages() && (
            <img
              src={orphanage.images[selectedImageIndex].url}
              alt={orphanage.name}
            />
          )}

          <div className="images">
            {orphanage.images.map((image, index) => (
              <button
                className={selectedImageIndex === index ? 'selected' : ''}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} key={image.url} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <MapContainer
                center={[
                  orphanage.address.latitude,
                  orphanage.address.longitude,
                ]}
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
                  position={[
                    orphanage.address.latitude,
                    orphanage.address.longitude,
                  ]}
                  interactive={false}
                />
              </MapContainer>

              <footer>
                <Link
                  to={{
                    pathname: `https://www.google.com/maps/search/?api=1&query=${orphanage.address.latitude},${orphanage.address.longitude}`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See routes on Google Maps
                </Link>
              </footer>
            </div>

            <hr />

            <h2>Instructions to visit</h2>
            <p>{orphanage.instructions}</p>

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
