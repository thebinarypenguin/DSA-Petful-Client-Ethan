import React from 'react';
import './Pet.css';
import ApiService from '../services/ApiService';

import './Pet.css';

class Pet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pet: null,
    };
  }

  componentDidMount() {

    if (this.props.type === 'cat') {
      ApiService.getCat().then((cat) => { this.setState({ pet: cat }); })
    }

    if (this.props.type === 'dog') {

      ApiService.getDog().then((dog) => { this.setState({ pet: dog }); })
    }
  }

  handleAdoptCat = () => {
    ApiService.adoptCat();
  }

  handleAdoptDog = () => {
    ApiService.adoptDog();
  }

  render() {

    let details;

    if (this.state.pet) {
      details = (
        <>
        <img src={this.state.pet.imageURL} alt={this.state.pet.imageDescription} />

        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <td>{this.state.pet.name}</td>
          </tr>
          <tr>
            <th>Sex</th>
            <td>{this.state.pet.sex}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{this.state.pet.age}</td>
          </tr>
          <tr>
            <th>Breed</th>
            <td>{this.state.pet.breed}</td>
          </tr>
          <tr>
            <th>Story</th>
            <td>{this.state.pet.story}</td>
          </tr>
          </tbody>
        </table>
        </>
      );
    }

    let button;

    if (this.props.type === 'cat') {
      button = (
          <input name="adoptCat" type="button" value='Adopt this cat' className="Button" onClick={this.handleAdoptCat}></input>
      );
    }

    if (this.props.type === 'dog') {
      button = (
          <input name="adoptDog" type="button" value='Adopt this dog' className="Button" onClick={this.handleAdoptDog}></input>
      );
    }

    return (
      <div className="Pet">
        { details }
        { button }
      </div>
    );
  }
}

export default Pet;
