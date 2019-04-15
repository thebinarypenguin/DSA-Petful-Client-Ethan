import React from "react";
import ApiService from "../../services/ApiService";

import "./ResetRoute.css";

class ResetRoute extends React.Component {

  componentDidMount() {
    ApiService.resetQueues();
  }

  render() {
    return null;
  }
}

export default ResetRoute;
