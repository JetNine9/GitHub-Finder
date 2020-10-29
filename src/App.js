import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import About from './components/pages/About'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import User from './components/users/User'
import './App.css';
import Users from './components/users/Users'
import axios from 'axios'




const App = () =>  {


  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
  }

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([])



  // function that will be searching the users
  const SearchUsers = async (text) => {
    setLoading( true )

    let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id$
    {githubClientId}=$
    {githubClientSecret}`)


    setUsers(res.data.items)

    setLoading(false)

  }

  //clear users from state

  const clearUsers = () => {

    setUsers([])
    setLoading(false)
  }


  // alert if nothing is in the searh bar
   const showAlert = (msg, type) => {

    setAlert({msg: type })

    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const getUser = async (username) => {

    setLoading(true);

    let res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {githubClientId}=$
    {githubClientSecret}`)




    setUser(res.data)
    setLoading(false)
  }

  //get user repo

  const getRepo = async (username) => {

    setLoading(true);

    let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
    {githubClientId}=$
    {githubClientSecret}`)




    setRepos(res.data);
    setLoading(false);
  }





    return (

      <Router>
        <div className="App">
          <Navbar title=" Github Finder" />


          <div className="container" >
            <Alert alert={alert} />

            <Switch>
              <Route exact path="/" render={props => (

                <Fragment>
                  <Search searchUsers={SearchUsers} clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users
                    loading={loading}
                    users={users}
                  />
                </Fragment>
              )} />

              <Route exact path='/about'>
                <About/>
              </Route>

              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={getUser} user={user} loading={loading} repos={repos} getRepo={getRepo}/>

              )} >

              </Route>

            </Switch>

          </div>

        </div>
      </Router>

    );



}

export default App;
