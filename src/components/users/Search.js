import React, { Component, Profiler } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {

    state = {
        text: " "
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,

    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('please enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({text: ''})
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.handleChange}  ></input>
                    <input type="submit" value="search" className="btn btn-dark btn-block" ></input>
                </form>

                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear Users</button> }
            </div>
        )
    }
}

export default Search
