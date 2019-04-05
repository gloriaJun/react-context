import React from 'react';
import Flex from 'styled-flex-component';
import Header from '../Header';
import Notification from '../Notification';

const AppPresenter = () => (
  <React.Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification />
    </Flex>
  </React.Fragment>
);

export default AppPresenter;