import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchDictionary } from '../actions/dictionary';
import Main from './Main';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const dictionaryState = useSelector(
    (state) => state.dictionary,
    shallowEqual
  );

  useEffect(() => {
    if (!dictionaryState.fetched) {
      dispatch(fetchDictionary());
    }
  });

  return (
    <div className="App">
      <IntlProvider
        messages={dictionaryState?.intl}
        defaultLocale="en"
        locale="en">
        <Router>
          <Main />
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;
