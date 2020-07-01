import React from 'react';

import { SpinnerContainer, SpinnerText, SpinnerLogo } from './spinner.styles';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerLogo />
      <SpinnerText><div></div><div></div><div></div><div></div></SpinnerText>
    </SpinnerContainer>
  )
}

export default Spinner;