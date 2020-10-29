// import React, {useReducer} from 'react';
// import axios from 'axios'
// import GithubConext from './githubContext'
// import GithubReducer from './githubReducer'
// import {Search_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS} from './type'

// const GithubState = (props) => {
//     const initialState = {
//         users: [],
//         user: {},
//         repos: [],
//         loading: false
//     }

//     const [state, dispatch] = useReducer(GithubReducer, initialState)

//     //SEARCH USER


//     //GET USER

//     //GET REPOS

//     // CLEAR USERS

//     // SET LOADING

//     return <GithubConext.Provider
//     value = {{
//         users: state.users,
//         user: state.user,
//         repos: state.repos,
//         loading: state.loading
//     }}
//     >
//         {props.children}
//     </GithubConext.Provider>
// }

// export default GithubState;
