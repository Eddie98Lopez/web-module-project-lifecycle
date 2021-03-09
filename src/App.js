import React from 'react'
import axios from 'axios'
import './App.css';
import Followers from './components/Followers'
import MyCard from './components/MyCard'

class App extends React.Component{

  state={
    self:{},
    followers: [],
  }

  componentDidMount(){
      axios.get(`https://api.github.com/users/Eddie98Lopez`)
        .then(res => {
          console.log(res.data)
          this.setState({...this.state, self: res.data})
          axios.get(res.data['followers_url'])
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
  }

  render(){
    return(
        <div>
          <h1>GitHub Cards</h1>
          <MyCard me={this.state.self}/>
          <Followers followers={this.state.followers}/>

        </div>
    )
  }
}

export default App;
