import React from 'react';

import { WelcomeScreenContainer, WelcomeElement, One, Two, Three } from './welcome-screen.styles';

const WelcomeScreen = () => {
  return (
    <WelcomeScreenContainer>
      <WelcomeElement>
        <One>1</One>
        <span>Search github users by name</span>
      </WelcomeElement>
      <WelcomeElement>
        <Two>2</Two>
        <span>Click on the user to go to his page</span>
      </WelcomeElement>
      <WelcomeElement>
        <Three>3</Three>
        <span>The charts show the users with the most followers</span>
      </WelcomeElement>
    </WelcomeScreenContainer>
  );
}

export default WelcomeScreen;