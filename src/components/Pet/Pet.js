import React from 'react';
import './Pet.css';
import ApiService from '../services/ApiService';

class Pet extends React.Component {

  handleAdoptCat = () => {
    ApiService.adoptCat();
  }

  handleAdoptDog = () => {
    ApiService.adoptDog();
  }

  render() {

    let button;

    if (this.props.type === 'cat') {
      button = (
          <input name="adoptCat" type="button" value='Adopt this cat' onClick={this.handleAdoptCat}></input>
      );
    }

    if (this.props.type === 'dog') {
      button = (
          <input name="adoptDog" type="button" value='Adopt this dog' onClick={this.handleAdoptDog}></input>
      );
    }

    return (
      <div className="Pet">

        <p>imageURL</p>
        <ul>
          <li>name</li>
          <li>sex</li>
          <li>age</li>
          <li>breed</li>
          <li>story</li>
        </ul>
        { button }
      </div>
    );
  }
}

export default Pet;
