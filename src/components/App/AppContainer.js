import React from 'react';
import AppPresenter from './AppPresenter';
import Store from '../../store';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this._deleteNotification = (id) => {
      this.setState(curState => {
        const newState = delete curState.notifications[id];
        return newState;
      });
    };

    this._seeNotification = (id) => {
      this.setState(curState => {
        return {
          ...curState,
          notifications: {
            ...curState.notifications,
            [id]: {
              ...curState.notifications[id],
              seen: true,
            }
          }
        }
      });
    }
    this.state = {
      notifications: {
        '1': {
          id: 1,
          text: 'Something',
          seen: false,
        },
        '2': {
          id: 2,
          text: 'Something else',
          seen: false,
        },
        '3': {
          id: 3,
          text: 'Something els but different',
          seen: false,
        },
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification,
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    )
  }
}