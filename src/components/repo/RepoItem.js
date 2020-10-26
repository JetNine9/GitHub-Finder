import React from 'react'
import Proptypes from 'prop-types'


const RepoItem = (props) => {
    console.log(props.repo)
    return (
        <div className="card">

        <h3>
        <a href={props.repo.html_url}>{props.repo.name}</a>
        </h3>
        </div>
    )
}

RepoItem.prototypes = {
    repo: Proptypes.object.isRequired
}

export default RepoItem;
