import React from 'react'
import styled from 'styled-components'


const MyWrapper = styled.div`
width:50%;
height:50%;
background-color:gray;
padding:2rem;
margin: 0 auto;
display:grid;
grid-template-columns: 200px 80%;
grid-template-rows: auto;
border-radius:20px`

const TextWrapper = styled.div`
padding: 0 0 0 2rem;
& p {
    margin: 0;
}
`



class MyCard extends React.Component{


    render(){

        const {me} = this.props 
        const style ={
            width: '100%',
            height: '200px',
            'borderRadius' : '50%', /*don't forget prefixes*/
            'backgroundImage': `url(${me['avatar_url']})`,
            'backgroundPosition': 'center center',
            /* as mentioned by Vad: */
            'backgroundSize': 'cover',
        }

        return(
            <MyWrapper>
                <div style={style} ></div>
                <TextWrapper>
                    <h2>{me.name}</h2>
                    <p>{me.location}</p>
                    <p>{me.login}</p>
                    <p>{me.bio}</p>
                </TextWrapper>
            </MyWrapper>
        )
    }
}

export default MyCard