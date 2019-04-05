import React from 'react';
import NotificationPresenter from './NotificationPresenter';

export default class NotificationContainer extends React.Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <NotificationPresenter {...this.props} {...this.state} />
    )
  }
}