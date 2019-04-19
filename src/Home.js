import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./bootstrap.min.css";

class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Home</h1>
          <p className="lead">
            This is a test for User Authentication with Auth2.0
          </p>
          <hr className="my-4" />
          <p>Start by</p>
          <div className="">
            {isAuthenticated() ? (
              <Link
                className="btn btn-secondary btn-sm active"
                role="button"
                to="/profile"
              >
                View Profile
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={login}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
