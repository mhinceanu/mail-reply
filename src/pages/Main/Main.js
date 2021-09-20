import React from 'react';
import { useHistory, useLocation, useParams, Route } from 'react-router';
import { routes } from '../../services/routes';
import routingService from '../../services/routingService';

const Main = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  routingService.update(history, location, params);

  return (
    <div>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.route}
          exact
          strict
          component={route.component}
        />
      ))}
    </div>
  );
};

export default Main;
