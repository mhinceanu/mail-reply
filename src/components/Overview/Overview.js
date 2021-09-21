import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from '../../actions/leads';
import { endSession } from '../../actions/users';
import {
  LEADS_ROUTE,
  NEGATIVE,
  NEUTRAL,
  POSITIVE,
  ACTIVE,
  LOGIN_ROUTE
} from '../../constants/constants';
import routingService from '../../services/routingService';
import leadsList from '../../devserver/db/leads.json';
import './Overview.css';

const Overview = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const userState = useSelector((state) => state.users, shallowEqual);

  const leadsState = useSelector((state) => state.leads, shallowEqual);

  const currentUser = userState?.users?.filter(
    (user) => user?.status === ACTIVE
  )[0];

  const handleReset = () => {
    setAlert(true);

    setTimeout(() => {
      dispatch(endSession(currentUser));
      setAlert(false);
      localStorage.setItem('Leads', JSON.stringify(leadsList));
      routingService.goTo(LOGIN_ROUTE);
    }, 3000);
  };

  useEffect(() => {
    if (!leadsState.leads) {
      dispatch(fetchLeads());
    }
  });

  return (
    <div className="overview">
      {alert && (
        <div className="overview_alert">
          <div className="overview_popup">Reseting ...</div>
        </div>
      )}
      <header>
        <button onClick={handleReset}>RESET</button>
        <p>OVERVIEW PAGE</p>
        <button onClick={() => routingService.goTo(LEADS_ROUTE)}>BACK</button>
      </header>
      <section>
        <p>
          Positive replies:{' '}
          {leadsState.leads.filter((lead) => lead.status === POSITIVE).length}
        </p>
        <p>
          Neutral replies:{' '}
          {leadsState.leads.filter((lead) => lead.status === NEUTRAL).length}
        </p>
        <p>
          Not a lead:{' '}
          {leadsState.leads.filter((lead) => lead.status === NEGATIVE).length}
        </p>
      </section>
      <ol type="1">
        {leadsState &&
          leadsState.leads?.map((lead) => (
            <li key={Math.random()}>
              <p>{lead.subject}</p>
              <textarea defaultValue={lead.body}></textarea>
              <p>{lead.status}</p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Overview;
