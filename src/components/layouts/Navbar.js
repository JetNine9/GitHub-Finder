import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({title}) =>  {


        return (
            <div>
                <nav className="navbar bg-primary">
                    <h1>
                 <i className="fab fa-github" ></i>
                    {title}
                    </h1>
                </nav>
            </div>
        )

}

Navbar.defaultProps = {
    title: " Github Finder"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar
