import React, { Component, Fragment } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text === '')
      this.props.setAlert('Please enter some text', 'light');
    else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearSearch } = this.props;
    return (
      <Fragment>
        {this.props.loading ? 'Loading....' : ''}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
