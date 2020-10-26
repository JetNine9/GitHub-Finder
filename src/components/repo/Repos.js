import React from 'react'
import Proptypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({repos}) => {

    return repos.map((repo) => {
        return <RepoItem repo = {repo} key={repo.id}>

        </RepoItem>
    })
}

Repos.proptypes = {
    Repos: Proptypes.array.isRequired
}

export default Repos;
