import React from 'react';

import Form from '../../components/form/form.component';
import ResultsPanel from '../../components/results-panel/results-panel.component';

import { Homepage } from './homepage.styles';

const HomePage = () => {
  return (
    <Homepage>
      <Form />
      <ResultsPanel />
    </Homepage>
  )
};

export default HomePage;