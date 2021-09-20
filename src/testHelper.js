import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import configureStore from './store/configureStore';
import getMiddlewares from './middlewares';

const originalInitialState = {
  requests: {}
};

export const WrapStore = ({ children, initialState = {} }) => {
  const state = { ...originalInitialState, ...initialState };
  const storeConfig = configureStore(getMiddlewares(), state);
  return (
    <storeConfig.Provider store={storeConfig.store}>
      {children}
    </storeConfig.Provider>
  );
};

export const createMockStore = () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  return mockStore({});
};
