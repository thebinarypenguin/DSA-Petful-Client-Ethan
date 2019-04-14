import React from 'react';
import Pet from '../Pet/Pet';
import ApiService from '../../services/ApiService';
import PositionTracker from '../PositionTracker/PositionTracker';

import './AdoptionRoute.css';

class AdoptionRoute extends React.Component {

  componentDidMount() {
    ApiService
      .getToken()
      .then((resp) => {
        window.localStorage.setItem('token', resp.token);
      })
      .catch(() => {});
  }

  render() {
    return (
      <div id="AdoptionRoute">
        <PositionTracker />
        <div className="PetContainer">
          <Pet type="cat"/>
          <Pet type="dog"/>
        </div>
      </div>
    );
  }
}

export default AdoptionRoute;
