import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const {
      login,
      id,
      avatar_url,
      url,
      html_url,
      followers_url,
      following_url,
      gists_url,
      starred_url,
      subscriptions_url,
      organizations_url,
      repos_url
    } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url}>
            <button className="btn btn-dark btn-sm my-1">More</button>
          </a>
        </div>
      </div>
    );
  }
}
export default UserList;
