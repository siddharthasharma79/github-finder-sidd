import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';

class UserItem extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-success">
            Back To Search
          </Link>
          Hirable:{' '}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt={login}
                className="round-img"
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>{location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username:</strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company:</strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website:</strong> {blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
          {repos.length > 0 && (
            <Fragment>
              <h3 className="all-center">Latest Repositories</h3>
              <Repos repos={repos} />
            </Fragment>
          )}
        </Fragment>
      );
    }
  }
}
export default UserItem;
