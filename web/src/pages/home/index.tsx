import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

const Home: React.FC = () => (
  <div id="home">
    <div className="content-wrapper">
      <img src={logoImg} alt="happy" />

      <main>
        <h1>Bring happiness to the world</h1>
        <p>Visit orphanages and change the day for many children</p>
      </main>

      <div className="location">
        <strong>Fortaleza</strong>
        <span>Ceará</span>
      </div>

      <Link to="/orphanages" className="map-link">
        <FiArrowRight size={26} color="rbga(0, 0, 0, 0.6)" />
      </Link>
    </div>
  </div>
);

export default Home;
