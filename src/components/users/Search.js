import React, { Fragment, useState } from 'react';

const Search = props => {
  const [text, setText] = useState('');

  //
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') props.setAlert('Please enter some text', 'light');
    else {
      props.searchUser(text);
      setText('');
    }
  };

  const { showClear, clearSearch } = props;
  return (
    <Fragment>
      {props.loading ? 'Loading....' : ''}
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearSearch}>
          Clear{' '}
        </button>
      )}
    </Fragment>
  );
};

export default Search;
