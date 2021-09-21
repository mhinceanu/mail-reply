import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  fetchLeads,
  getLead,
  resetLead,
  updateLead
} from '../../actions/leads';
import { endSession, fetchUsers } from '../../actions/users';
import {
  ACTIVE,
  LOGIN_ROUTE,
  OPTIONS,
  OVERVIEW_ROUTE,
  PENDING,
  SESSION_TIME
} from '../../constants/constants';
import routingService from '../../services/routingService';
import './Leads.css';

const Leads = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users, shallowEqual);
  const leadsState = useSelector((state) => state.leads, shallowEqual);
  const [timer, setTimer] = useState(SESSION_TIME);
  const [alert, setAlert] = useState(false);

  const currentUser = userState?.users?.filter(
    (user) => user?.status === ACTIVE
  )[0];

  const lead = leadsState.lead?.lead;
  const index = leadsState.lead?.index;

  const handleSession = () => {
    dispatch(
      resetLead({
        index: index,
        lead: { ...lead, status: PENDING }
      })
    );
    dispatch(endSession(currentUser));
    routingService.goTo(LOGIN_ROUTE);
  };

  const handleUpdate = (status) => {
    dispatch(
      updateLead({
        index: index,
        lead: { ...lead, status: status, sessionUser: currentUser.name }
      })
    );
    dispatch(getLead(currentUser));
    setTimer(SESSION_TIME);
  };

  const handleAlert = () => {
    dispatch(
      resetLead({
        index: index,
        lead: { ...lead, status: PENDING }
      })
    );
    dispatch(getLead(currentUser));
    setTimer(SESSION_TIME);
    setAlert(false);
  };

  useEffect(() => {
    const set = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setAlert(true);
      }
    }, 1000);

    return () => clearTimeout(set);
  });

  const handleOverview = () => {
    dispatch(
      resetLead({
        index: index,
        lead: { ...lead, status: PENDING }
      })
    );
    routingService.goTo(OVERVIEW_ROUTE);
  };

  useEffect(() => {
    dispatch(fetchLeads());
    dispatch(getLead(currentUser));

    if (!currentUser) {
      dispatch(fetchUsers());
    }
  }, [dispatch, currentUser]);

  return (
    <div className="leads">
      {alert && (
        <div className="leads_alert">
          <div className="leads_popup">
            <p>Page will be refreshed because session has expired</p>
            <button onClick={handleAlert}>OK</button>
          </div>
        </div>
      )}
      <div className="leads_header">
        <p>Active user: {currentUser?.name}</p>
        <p>Elapsed time: {timer}</p>
        <button onClick={handleSession}>End session</button>
      </div>
      <div className="leads_options">
        {OPTIONS.map((option) => (
          <button onClick={() => handleUpdate(option.id)} key={option.id}>
            {option.title}
          </button>
        ))}
      </div>
      <div className="leads_email">
        <input name="subject" value={lead?.subject} disabled />
        <textarea value={lead?.body} disabled></textarea>
      </div>
      <button onClick={handleOverview}>OVERVIEW</button>
    </div>
  );
};

export default Leads;
