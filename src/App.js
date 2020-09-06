import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import PageWrapper from './Components/PageWrapper';

//Pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';


function App() {
  return (
    <Router>
      <PageWrapper>

        <Route
          exact={true}
          path='/'
          component={Home}
        />

        <Route
          path='/about'
          component={About}
        />

      </PageWrapper>
    </Router>

  );
}

export default App;
