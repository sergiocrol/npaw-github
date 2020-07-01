import React, { Component } from 'react';
import axios from 'axios';

import ErrorImage from '../../assets/error.png';

import { ErrorContainer } from './error-boundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  }

  componentDidMount() {
    this.requestInterceptor = axios.interceptors.request.use(req => {
      this.setState({ hasErrored: false });
      return req;
    });

    this.responseInterceptor = axios.interceptors.response.use(
      res => res,
      error => {
        this.setState({ hasErrored: true });
      }
    );
  }

  componentWillUnmount() {

    axios.interceptors.request.eject(this.requestInterceptor);
    axios.interceptors.response.eject(this.responseInterceptor);
  }


  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorContainer>
        <img src={ErrorImage} alt='Error' />
        <span>Ooops... something went wrong</span>
      </ErrorContainer>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;