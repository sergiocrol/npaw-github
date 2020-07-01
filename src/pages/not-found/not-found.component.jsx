import React from 'react';

import NotFoundImage from '../../assets/not-found.png';

import { NotFoundContainer } from './not-found.styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={NotFoundImage} alt='Not found' />
      <span>404 - page not found</span>
    </NotFoundContainer>
  )
};

export default NotFound;