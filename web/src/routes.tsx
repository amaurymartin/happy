import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import OrphanagesIndex from './pages/orphanages/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/orphanages" component={OrphanagesIndex} />
  </BrowserRouter>
);

export default Routes;
