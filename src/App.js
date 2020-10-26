import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import About from './components/pages/About'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import User from './components/users/User'
import './App.css';
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  // this.setState({loading: true})

  //   let res = await axios.get(`https://api.github.com/users?users?client_id$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)


  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   })



  // }

  // function that will be searching the users
  SearchUsers = async (text) => {
    this.setState({ loading: true })

    let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)


    this.setState({
      users: res.data.items,
      loading: false
    })



  }

  //clear users from state

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }


  // alert if nothing is in the searh bar
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null, loading: false })
    }, 3000);
  }

  getUser = async (username) => {
    this.setState({ loading: true })

    let res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)


    this.setState({
      user: res.data,
      loading: false
    })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar title=" Github Finder" />


          <div className="container" >
            <Alert alert={this.state.alert} />

            <Switch>
              <Route exact path="/" render={props => (

                <Fragment>
                  <Search searchUsers={this.SearchUsers} clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </Fragment>
              )} />

              <Route exact path='/about'>
                <About/>
              </Route>

              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>

              )} >

              </Route>

            </Switch>

          </div>

        </div>
      </Router>
    );
  }


}

export default App;
