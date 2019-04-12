import React from 'react';
import Pet from '../Pet/Pet';
import ApiService from '../services/ApiService';


import './AdoptionRoute.css';

class AdoptionRoute extends React.Component {

  handleFormSubmit(ev) {

    ev.preventDefault();

    const { adoptDog, adoptCat } = ev.target;

    // ApiService.adopt(adoptDog.checked, adoptCat.checked)
    // .then(res => console.log(res))
    ApiService.getDog().then(res => {
      console.log(res);
    })

    ApiService.getCat().then(res => {
      console.log(res);
    })

    // get adoptDog
    // get adoptCat

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
