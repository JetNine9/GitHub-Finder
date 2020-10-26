import React, {Fragment, useEffect} from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Repos from '../repo/Repos'

const User = (props) => {

    // by placing an empty array it means that code runs when it is mounted.
    useEffect(() => {
        props.getUser(props.match.params.login)
        props.getRepo(props.match.params.login)
        //eslint-disable-next-line
    },[])


         const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            hireable,
            company,
            public_repos

        } = props.user



        if (props.loading) {
            return <Spinner />
        } else {
            return (
                <Fragment>
                    <Link to="/" className="btn btn-light" >Back to search</Link>
                    Hireable: {' '}
                     {hireable ? <i className="fas fa-check text-success"> </i> : <i className="fas fa-times-circle text-danger"> </i> }
                     <div className="card grid-2" >
                         <div className="all-center" >
                         <img src={avatar_url} alt="" className="round-img" style={{width: "150px"}} ></img>
                         <h1>{name}</h1>
                         <p>{location}</p>
                         </div>

                        <div >
                            {bio && <Fragment>
                            <h3>bio</h3>
                            <p>{bio}</p>
                            </Fragment>}

                            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username: </strong> {login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {login && <Fragment>
                                        <strong>Company: </strong> {company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {login && <Fragment>
                                        <strong>Website: </strong> {blog}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>

                     </div>

                        <div className="card text-center">
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">following: {following}</div>
                            <div className="badge badge-dark">Repository: {public_repos}</div>

                        </div>
                        <Repos repos={props.repos}/>
                </Fragment>
            )
        }




}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

export default User
