/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

const UserItem = (props) => {

    let { login, html_url, avatar_url, } = props.user

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} ></img>
            <h3>{login}</h3>

            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1' >More</a>
            </div>

        </div>
    )

}

UserItem.prototypes = {
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url:PropTypes.string.isRequired
}

export default UserItem
