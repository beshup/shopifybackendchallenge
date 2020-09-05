import React from 'react';
import {useRoutes} from 'hookrouter';
import NotFoundPage from './pages/NotFound'
import routes from './Routes'

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
