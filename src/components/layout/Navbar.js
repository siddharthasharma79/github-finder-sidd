import React, { Component } from 'react';

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };
  render() {
    return (
      <div className="navbar bg-primary">
        <h2>
          <i className={this.props.icon} /> {this.props.title}
        </h2>
      </div>
    );
  }
}

export default Navbar;
