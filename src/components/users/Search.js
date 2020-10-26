import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {

   const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value )
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            props.setAlert('please enter something', 'light')
        } else {
            props.searchUsers(text)
            setText( '' )
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users" value={text} onChange={handleChange}  ></input>
                <input type="submit" value="search" className="btn btn-dark btn-block" ></input>
            </form>

            {props.showClear && <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear Users</button>}
        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,

}

export default Search
