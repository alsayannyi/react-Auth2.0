import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.switchClassOnClick = this.switchClassOnClick.bind(this);
  }

  switchClassOnClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    const { isAuthenticated, login, logout, userHasScopes } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav container-fluid">
          <li className="nav-item " onClick={this.switchClassOnClick}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/public">
              Public
            </Link>
          </li>
          {isAuthenticated() && (
            <li className="nav-item">
              <Link className="nav-link" to="/private">
                Private
              </Link>
            </li>
          )}
          {isAuthenticated() && userHasScopes(["read:courses"]) && (
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                What's all About
              </Link>
            </li>
          )}
          <li className="nav-item ml-auto">
            <button
              type="button"
              className={`btn ${
                isAuthenticated() ? "btn-outline-danger" : "btn-outline-success"
              }`}
              onClick={isAuthenticated() ? logout : login}
            >
              {isAuthenticated() ? "Log Out" : "log In"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
