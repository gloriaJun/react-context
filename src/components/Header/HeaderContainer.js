import React from 'react';
import HeaderPresenter from './HeaderPresenter';

export default class HeaderContainer extends React.Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <HeaderPresenter {...this.state} />
    )
  }
}