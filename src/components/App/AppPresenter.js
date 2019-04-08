import React from 'react';
import Flex from 'styled-flex-component';
import Header from '../Header';
import Notification from '../Notification';
import Store from '../../store';

const AppPresenter = () => (
  <React.Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notifications).map(key => (
            <Notification
              key={store.notifications[key].id}
              id={store.notifications[key].id}
              text={store.notifications[key].text}
              seen={store.notifications[key].seen}
            />
          ))
        }}
      </Store.Consumer>
    </Flex>
  </React.Fragment>
);

export default AppPresenter;