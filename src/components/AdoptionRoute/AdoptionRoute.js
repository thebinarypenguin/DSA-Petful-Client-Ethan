import React from 'react';
import Pet from '../Pet/Pet';
import ApiService from '../../services/ApiService';

import './AdoptionRoute.css';

class AdoptionRoute extends React.Component {

  constructor(props) {
    super(props);

    this.timeout = null;

    this.state = {
      position: null,
      cat: null,
      dog: null,
    };
  }

  poll = () => {

    let currentPosition;
    let currentCat;
    let currentDog;

    return ApiService.getPosition().then((resp) => {
      currentPosition = resp.position;
    })
    .then((resp) => {
      return ApiService.getCat().then(cat => {
        currentCat = cat;
      });
    })
    .then((resp) => {
      return ApiService.getDog().then(dog => {
        currentDog = dog;
      });
    })
    .then(() => {
      this.setState({
        position: currentPosition,
        cat: currentCat,
        dog: currentDog,
      });
    })
    .catch((resp) => {
      this.setState({
        position: null,
        cat: null,
        dog: null,
      });
    })
    .finally(() => {
      this.timeout = setTimeout(this.poll, 1 * 1000);
    });
  }

  componentDidMount() {
    ApiService
      .getToken()
      .then((resp) => {
        window.localStorage.setItem('token', resp.token);
        this.poll();
      })
      .catch(() => {});
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {

    let queueMessage;

    if (this.state.position === 1) {
      queueMessage = 'It is your turn you have 60 seconds';
    }
    if (this.state.position === 2) {
      queueMessage = 'There is 1 person ahead of you in the queue';
    }
    if (this.state.position > 2) {
      queueMessage = `There are ${this.state.position-1} people ahead of you in the queue`;

    }

    return (
      <div id="AdoptionRoute">
        <p id="QueueMessage">{queueMessage}</p>
        <div className="PetContainer">
          <Pet type="cat" pet={this.state.cat} position={this.state.position} />
          <Pet type="dog" pet={this.state.dog} position={this.state.position} />
        </div>
      </div>
    );
  }
}

export default AdoptionRoute;
