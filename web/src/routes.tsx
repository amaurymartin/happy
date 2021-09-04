import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
  </BrowserRouter>
);

export default Routes;
