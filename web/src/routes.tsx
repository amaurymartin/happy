import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import OrphanagesIndex from './pages/orphanages/index';
import OrphanageShow from './pages/orphanages/show';
import OrphanageNew from './pages/orphanages/new';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/orphanages" exact component={OrphanagesIndex} />
      <Route path="/orphanages/new" component={OrphanageNew} />
      <Route path="/orphanages/:key" component={OrphanageShow} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
