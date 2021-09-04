import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../../assets/images/map-marker.svg';

import './styles.css';

const OrphanagesIndex: React.FC = () => (
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

      <div />

      <Link to="/orphanages/new" className="new-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </aside>
  </div>
);

export default OrphanagesIndex;
