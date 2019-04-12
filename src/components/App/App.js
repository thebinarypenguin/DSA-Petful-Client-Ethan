import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeRoute from '../HomeRoute/HomeRoute';
import AdoptionRoute from '../AdoptionRoute/AdoptionRoute';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div id="App">

        <header>
          <h1>Petful</h1>
        </header>

        <main>
          <Router>
            <Route exact path='/' component={HomeRoute} />
            <Route path='/adopt' component={AdoptionRoute} />
          </Router>
        </main>

      </div>
    );
  }
}

export default App;
