import Login from '../components/Login';
import Leads from '../components/Leads';
import Overview from '../components/Overview';
import {
  LEADS_ROUTE,
  LOGIN_ROUTE,
  OVERVIEW_ROUTE
} from '../constants/constants';

export const routes = [
  {
    component: Login,
    route: LOGIN_ROUTE
  },
  {
    component: Leads,
    route: LEADS_ROUTE
  },
  {
    component: Overview,
    route: OVERVIEW_ROUTE
  }
];
