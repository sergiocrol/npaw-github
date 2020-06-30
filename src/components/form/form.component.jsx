import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CustomFormInput from '../custom-form-input/custom-form-input.component';

import { fetchUsersStart, fetchUsersStartAsync } from '../../redux/user/user.actions'

import { FormContainer } from './form.styles';

class Form extends Component {
  state = {
    user: '',
    isDisabled: true,
    errorMessage: ''
  }

  inputValidation = value => {
    let errorMessage = '', isDisabled = true;
    if (value.length < 4) {
      errorMessage = '*must contain at least 4 characters';
    } else {
      value.toLowerCase() === 'gcpglobal'
        ? errorMessage = `'gcpglobal' word is not allowed`
        : isDisabled = false;
    }
    return { isDisabled, errorMessage };
  }

  handleInput = event => {
    const user = event.currentTarget.value;
    const { isDisabled, errorMessage } = this.inputValidation(user);
    this.setState({
      user,
      isDisabled,
      errorMessage
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.fetchUsersStart();
    this.props.fetchUsersStartAsync(this.state.user);
  }

  render() {
    const { user, isDisabled, errorMessage } = this.state;
    return (
      <FormContainer onSubmit={this.onSubmit}>
        <CustomFormInput
          name='user'
          type='user'
          value={user}
          label='Search by name'
          onChange={this.handleInput}
          errorMessage={errorMessage}
        />
        <CustomButton disabled={isDisabled}>find</CustomButton>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsersStart: () => dispatch(fetchUsersStart()),
  fetchUsersStartAsync: (user) => dispatch(fetchUsersStartAsync(user))
})

export default connect(null, mapDispatchToProps)(Form);