import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setActiveUser } from '../../actions/users';
import { LEADS_ROUTE } from '../../constants/constants';
import { fetchUsers } from '../../actions/users';
import routingService from '../../services/routingService';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.users, shallowEqual);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedUser(value);
  };

  const handleSubmit = () => {
    dispatch(setActiveUser(Number(selectedUser)));
    routingService.goTo(LEADS_ROUTE);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="login">
      <select name="users" onChange={handleSelect}>
        <option value="null">Select user ...</option>
        {userState.users &&
          userState.users?.map(
            (user, index) =>
              user && (
                <option key={user.name} value={index}>
                  {user.name}
                </option>
              )
          )}
      </select>

      <button onClick={handleSubmit} disabled={!selectedUser}>
        Login
      </button>
    </div>
  );
};

export default Login;
