import React from 'react'

class Follower extends React.Component{

    render(){

        const {follower} = this.props

        return(
            <div>

                <h3>{follower.name}</h3>
                <p>{follower.login}</p>
                <p>{follower.location}</p>
            </div>
        )
    }
}

export default Follower