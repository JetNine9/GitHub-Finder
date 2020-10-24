import React, { Component} from 'react'
import Navbar from './components/layouts/Navbar'
import './App.css';
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {

    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)

    this.setState({loading: true})

    let res = await axios.get(`https://api.github.com/users?users?client_id$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)


    this.setState({
      users: res.data,
      loading: false
    })

  }




  render() {

    return (
      <div className="App">
        <Navbar title=" Github Finder" />

        <div className="container" >
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
