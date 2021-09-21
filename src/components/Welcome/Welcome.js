import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Welcome = () => {
  const dictionaryState = useSelector(
    (state) => state.dictionary,
    shallowEqual
  );

  return (
    <div>
      <FormattedMessage id="welcome" />
      {dictionaryState?.fetched && <p>Success</p>}
    </div>
  );
};

export default Welcome;
