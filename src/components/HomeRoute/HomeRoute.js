import React from 'react';
import { Link } from 'react-router-dom';

import './HomeRoute.css';

class HomeRoute extends React.Component {

  render() {
    return (
      <div id="HomeRoute">
        <p>Welcome to Petful! We're an adoption service that operates strictly on a "first-in, first-out" basis. We offer FIFO style adoption services for dogs and cats. A wonderful dog or cat will be presented to you in the order they came into our shelter. You will be given 60 seconds to decide if you want the current dog or cat. If your time runs out, you will be put to the end of the line and will have to wait until it is your turn again. Click on the Start button below whenever you're ready to begin! </p>

        <div className='ButtonContainer'>
          <Link className="Button" to='/adopt'>Start</Link>
        </div>
      </div>
    );
  }
}

export default HomeRoute;
