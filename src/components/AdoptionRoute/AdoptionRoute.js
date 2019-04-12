import React from 'react';
import Pet from '../Pet/Pet';

import './AdoptionRoute.css';

class AdoptionRoute extends React.Component {

  handleFormSubmit(ev) {

    ev.preventDefault();

    // get adoptCat
    // get adoptDog

    // fetch
      // good
        // replace adopt button with Congratulations
      // err
        // put error message above the adopt button
        console.log('submit')
  }

  render() {
    return (
      <div id="AdoptionRoute">
        <form onSubmit={this.handleFormSubmit}>
          <div className="PetContainer">
            <Pet type="cat"/>
            <Pet type="dog"/>
          </div>
          <div className="ButtonContainer">
            <button className="Button">Adopt</button>
          </div>
        </form>

      </div>
    );
  }
}

export default AdoptionRoute;
