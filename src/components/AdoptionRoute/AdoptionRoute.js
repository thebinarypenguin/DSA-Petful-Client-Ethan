import React from 'react';
import Pet from '../Pet/Pet';
import ApiService from '../../services/ApiService';

import './AdoptionRoute.css';

class AdoptionRoute extends React.Component {

  componentDidMount() {
    ApiService
      .getToken()
      .then((token) => {
        window.localStorage.setItem('token', token);
      });
  }

  render() {
    return (
      <div id="AdoptionRoute">
        <div className="PetContainer">
          <Pet type="cat"/>
          <Pet type="dog"/>
        </div>
      </div>
    );
  }
}

export default AdoptionRoute;
