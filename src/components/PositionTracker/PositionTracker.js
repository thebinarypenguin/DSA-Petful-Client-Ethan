import React from 'react';
import ApiService from '../../services/ApiService';

import './PositionTracker.css';

class PositionTracker extends React.Component {

  constructor(props) {
    super(props);

    this.timeout = null;

    this.state = {
      position: null
    };
  }

  _poll = () => {

    return ApiService.getPosition().then((resp) => {
      this.setState({ position: resp.position });
    }).catch((resp) => {
      this.setState({ position: null });
    })
    .finally(() => {
      this.timeout = setTimeout(this._poll, 1 * 1000);
    });
  }

  componentDidMount() {
    this._poll();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div id="PositionTracker">
        {this.state.position}
      </div>
    );
  }
}

export default PositionTracker;
