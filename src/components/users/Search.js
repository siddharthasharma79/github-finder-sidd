import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, searchUsers, clearUsers, loading } = githubContext;
  const [text, setText] = useState('');

  //
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') alertContext.setAlert('Please enter some text', 'light');
    else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <Fragment>
      {loading ? 'Loading....' : ''}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
          // onKeyUp={this.onSubmit}
        />
        <button type="submit" className="btn btn-success btn-block">
          Search User
        </button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear{' '}
        </button>
      )}
    </Fragment>
  );
};

export default Search;
