import React from 'react';
import { connect } from 'react-redux';

import { toggleDarkMode } from '../../redux/theme/theme.actions'

import { DarkModeButton } from './header.styles';

const Header = ({ toggleDarkMode }) => {
  return (
    <div>
      <span>Header</span>
      <DarkModeButton onClick={toggleDarkMode}>D</DarkModeButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
})

export default connect(null, mapDispatchToProps)(Header);