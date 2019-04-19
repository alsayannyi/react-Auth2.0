import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    //handle authentification if expected values are in URL
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid calbback URL");
    }
  }
  render() {
    return <h6>Loading ...</h6>;
  }
}

export default Callback;
