import React from 'react';

import './Pet.css';

class Pet extends React.Component {

  render() {

    let checkbox;

    if (this.props.type === 'cat') {
      checkbox = (
        <>
          <label htmlFor="adoptCat">Checkbox</label>
          <input name="adoptCat" type="checkbox"></input>
        </>
      );
    }

    if (this.props.type === 'dog') {
      checkbox = (
        <>
          <label htmlFor="adoptDog">Checkbox</label>
          <input name="adoptDog" type="checkbox"></input>
        </>
      );
    }

    return (
      <div className="Pet">

        <p>image</p>

        <ul>
          <li>alpha</li>
          <li>bravo</li>
          <li>charlie</li>
        </ul>

        { checkbox }

      </div>
    );
  }
}

export default Pet;
