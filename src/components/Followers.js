import React from 'react'
import styled from 'styled-components'
import Follower from './Follower'

const Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
`

class Followers extends React.Component{

    render(){

        const {followers} = this.props

        return(
            <div>
            {followers.length === 0 ? "You don't have any followers (sad face bro). " : <Wrapper>{followers.map(item => <Follower follower={item}/>)}</Wrapper>}
            </div>
        )
    }
}

export default Followers