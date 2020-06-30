import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ResultsPanelContainer } from './results-panel.styles';

class ResultPanel extends Component {
  render() {
    const { isFetching, users } = this.props;
    console.log(this.props.isFetching)
    console.log(this.props.users);
    console.log(this.props.isFetching)
    return (
      <ResultsPanelContainer>
        {
          isFetching
            ? <span>Loading...</span>
            : users.map(user => <p key={user.id}>{user.login}</p>)
        }
      </ResultsPanelContainer>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(ResultPanel);