import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import styled from 'styled-components';

import HomePage from './pages/homepage/homepage.component';
import UserPage from './pages/userpage/userpage.component';
import NotFound from './pages/not-found/not-found.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { GlobalStyle } from './global.styles';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const WhiteGap = styled.div`
  width: 100%;
  height: 90px;
`;

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <WhiteGap />
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/user/:userId" component={UserPage} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.darkMode
});

export default connect(mapStateToProps)(App);
