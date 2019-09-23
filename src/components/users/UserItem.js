import React from 'react';
import { Link } from 'react-router-dom';

const User = props => {
  const {
    login,
    // id,
    avatar_url
    // url,
    // html_url,
    // followers_url,
    // following_url,
    // gists_url,
    // starred_url,
    // subscriptions_url,
    // organizations_url,
    // repos_url
  } = props.user;
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
        <Link to={`/user/${login}`}>
          <button className="btn btn-dark btn-sm my-1">More</button>
        </Link>
      </div>
    </div>
  );
};
export default User;
