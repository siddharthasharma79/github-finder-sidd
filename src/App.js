import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import SearchUser from './components/search/search';
import UserList from './components/user-list/UserList';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  // SEARCH USER
  findUser = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // SET ALERT
  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  clearSearch = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <div className="App">
          <Navbar title={this.state.title} icon={this.state.icon} />
          <div className="container">
            <Alert alert={this.state.alert} />
            <SearchUser
              findUser={this.findUser}
              setAlert={this.setAlert}
              clearSearch={this.clearSearch}
              showClear={users.length > 0 ? true : false}
            />
            <UserList users={users} loading={loading} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
