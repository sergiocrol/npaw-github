import React from 'react';
import { connect } from 'react-redux';

import { toggleDarkMode } from '../../redux/theme/theme.actions';
import { ReactComponent as Logo } from '../../assets/github.svg';
import Switch from '../../assets/switch.png';

import { DarkModeButton, HeaderContainer, HeaderBody, HeaderName } from './header.styles';

const Header = ({ toggleDarkMode, theme }) => {
  return (
    <HeaderContainer>
      <HeaderBody>
        <HeaderName to='/'>
          <Logo />
          <span>Git<span>.npaw</span></span>
        </HeaderName>
        <DarkModeButton theme={theme} onClick={toggleDarkMode}>
          <img src={Switch} alt='dark mode' />
        </DarkModeButton>
      </HeaderBody>
    </HeaderContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
});

const mapStateToProps = state => ({
  theme: state.theme.darkMode
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);