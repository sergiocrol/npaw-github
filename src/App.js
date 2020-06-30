import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import UserPage from './pages/userpage/userpage.component';
import NotFound from './pages/not-found/not-found.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/user/:userId" component={UserPage} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.darkMode
});

export default connect(mapStateToProps)(App);
