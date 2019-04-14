import React from "react";
import "./Pet.css";
import ApiService from "../../services/ApiService";

import "./Pet.css";

class Pet extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      pet: null,
      adopted: false,
      errorMessage: null,
    };
  }

  handleAdoptCat = () => {

    ApiService.adoptCat().then(data => {
      this.setState({ adopted: true });
    }).catch((resp) => {
      this.setState({ errorMessage: resp.message });
    });
  };

  handleAdoptDog = () => {

    ApiService.adoptDog().then(data => {
      this.setState({ adopted: true });
    }).catch((resp) => {
      this.setState({ errorMessage: resp.message });
    });
  };

  renderEmptyQueue = () => {

    return (
      <div className="Pet">no pets</div>
    );
  }

  renderPet = () => {

    let button;

    if (this.props.type === 'cat') {
      button = (
        <input
          name="adoptCat"
          type="button"
          value="Adopt this cat"
          className="Button"
          onClick={this.handleAdoptCat}
        />
      );
    }

    if (this.props.type === 'dog') {
      button = (
        <input
          name="adoptDog"
          type="button"
          value="Adopt this dog"
          className="Button"
          onClick={this.handleAdoptDog}
        />
      );
    }

    if (this.props.position > 1) {
      button = (
        <input
          name="waiting"
          type="button"
          value="Waiting"
          disabled
          className="Button"
        />
      );
    }

    return (
      <div className="Pet">
        <img
          src={this.props.pet.imageURL}
          alt={this.props.pet.imageDescription}
        />

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{this.props.pet.name}</td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>{this.props.pet.sex}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{this.props.pet.age}</td>
            </tr>
            <tr>
              <th>Breed</th>
              <td>{this.props.pet.breed}</td>
            </tr>
            <tr>
              <th>Story</th>
              <td>{this.props.pet.story}</td>
            </tr>
          </tbody>
        </table>

        <div className="ErrorMessage">{this.state.errorMessage}</div>

        { button }
      </div>
    );
  }

  renderThankYou = () => {

    return (
      <div className="Pet">Thank You</div>
    );
  }

  render() {

    if (this.state.adopted) {
      return this.renderThankYou();
    }

    if (this.props.pet) {
      return this.renderPet();
    }

    return this.renderEmptyQueue();
  }
}

export default Pet;
