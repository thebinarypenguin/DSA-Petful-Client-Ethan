import React from 'react';
import { Link } from 'react-router-dom';

import './HomeRoute.css';

class App extends React.Component {

  render() {
    return (
      <div id="HomeRoute">
        <p>this is the home route</p>

        <div class='ButtonContainer'>
          <Link class="Button" to='/adopt'>Start</Link>
        </div>
      </div>
    );
  }
}

export default App;
