import React, { Component} from 'react'
import Navbar from './components/layouts/Navbar'
import Search from './components/users/Search'
import Alet, { Alert } from './components/layouts/Alert'
import './App.css';
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
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
  SearchUsers =  async (text) => {
    this.setState({loading: true})

    let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)


    this.setState({
      users: res.data.items,
      loading: false
    })

    console.log(res.data)

  }

  //clear users from state

  clearUsers = () => {
    this.setState({users:[], loading: false})
  }


//
setAlert = (msg, type) => {
  this.setState({alert: {msg, type}})
  setTimeout(() => {
    this.setState({alert: null, loading: false})
  }, 1000);
}

  render() {

    return (
      <div className="App">
        <Navbar title=" Github Finder" />
        <Search searchUsers={this.SearchUsers} clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert = {this.setAlert}
        />

        <div className="container" >
        <Alert alert={this.state.alert} />
          <Users
            loading = {this.state.loading}
            users = {this.state.users}
           />
        </div>

      </div>
    );
  }


}

export default App;
