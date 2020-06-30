import React, { Component } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component';

import { Form } from './homepage.styles';

class HomePage extends Component {
  state = {
    email: ''
  }

  handleInput = event => {
    this.setState({
      email: event.currentTarget.value
    })
  }

  render() {
    return (
      <div className='homepage'>
        <h3>Hello There!</h3>
        <Form>
          <CustomFormInput
            name='email'
            type='email'
            value={this.state.email}
            label='Email'
            onChange={this.handleInput}
          />
          <CustomButton onClick={() => { console.log('hi') }}>Click me</CustomButton>
        </Form>
      </div>)
  }
};

export default HomePage;