import React, { Component } from "react";

class Public extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/public")
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not Ok");
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    console.log(this.state.message);
    return (
      <div className="alert alert-secondary" role="alert">
        result: {this.state.message}
      </div>
    );
  }
}

export default Public;
