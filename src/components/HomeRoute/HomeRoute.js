import React from 'react';
import { Link } from 'react-router-dom';

import './HomeRoute.css';

class HomeRoute extends React.Component {

  render() {
    return (
      <div id="HomeRoute">
        <p>this is the home route</p>

        <div className='ButtonContainer'>
          <Link className="Button" to='/adopt'>Start</Link>
        </div>
      </div>
    );
  }
}

export default HomeRoute;
