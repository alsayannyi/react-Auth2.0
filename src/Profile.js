import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <div className="container">
          <div className="row">
            <h1>Profile</h1>
          </div>
          <div className="row">
            <img
              className="img-fluid img-thumbnail"
              style={{ maxWidth: 100, maxHeight: 100 }}
              src={profile.picture}
              alt="profile pic"
            />
          </div>
          <div className="row">
            <p className="col">{profile.nickname}</p>
          </div>
          <div className="row">
            <pre className="col">{JSON.stringify(profile, null, 2)}</pre>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
