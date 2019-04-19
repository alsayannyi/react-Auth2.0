import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    fetch("/course", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not Ok");
      })
      .then(response => this.setState({ courses: response.courses }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.courses.map(course => {
          return (
            <li className="list-group-item" key={course.id}>
              {course.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Courses;
