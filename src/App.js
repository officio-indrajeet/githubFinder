import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
// import Users from './components/users/Users';
import User from './components/users/User';
// import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
// import axios from 'axios';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });

  //   // console.log(res.data);
  // }

  // Search Github Users
  // const searchUsers = async (text) => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ users: res.data.items, loading: false });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // Get Single Github user
  // const getUser = async (username) => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ user: res.data, loading: false });
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // Get users repos
  // const getUserRepos = async (username) => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ repos: res.data, loading: false });
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  // clear users from state
  // const clearUsers = () => {
  //   // this.setState({ users: [], loading: false });
  //   setUsers([]);
  //   setLoading(false);
  // };

  // Set Alert
  // const showAlert = (msg, type) => {
  //   // this.setState({ alert: { msg, type } });
  //   setAlert({ msg, type });
  //   // setTimeout(() => this.setState({ alert: null }), 5000);
  //   setTimeout(() => setAlert(null), 5000);
  // };

  // const { users, user, repos, loading } = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              {/* <Alert alert={alert} /> */}
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                  // render={(props) => (
                  //   <Fragment>
                  //     <Search
                  //     // searchUsers={searchUsers}
                  //     // clearUsers={clearUsers}
                  //     // showClear={users.length > 0 ? true : false}
                  //     // setAlert={showAlert}
                  //     />
                  //     {/* <Users loading={loading} users={users} /> */}
                  //     <Users />
                  //   </Fragment>
                  // )}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  component={User}
                  // render={(props) => (
                  //   // <User
                  //   //   {...props}
                  //   //   // getUser={getUser}
                  //   //   // getUserRepos={getUserRepos}
                  //   //   // user={user}
                  //   //   // repos={repos}
                  //   //   // loading={loading}
                  //   // />
                  // )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
