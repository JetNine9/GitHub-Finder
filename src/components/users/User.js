import React, { Component, Fragment} from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {

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


        } = this.props.user

        const { loading } = this.props

        if (loading) {
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
                </Fragment>
            )
        }



    }
}

export default User
