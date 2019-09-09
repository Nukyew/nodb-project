import React from 'react';
import './App.css';
import Header from './components/Header'
import Store from './components/Store'
import axios from 'axios'

class App extends React.Component {
  state = {
    storeView: '',
    jonMode: false
  }

  componentDidMount = () => {
    let rand = Math.ceil(Math.random() * 10)
    if (rand === 10){
      this.setState({
        jonMode: true
      })
    }
    axios.get('/api/storeview').then(res => {
      this.setState({
        storeView: res.data
      })
    })
  }

  switchView = (view) => {
    axios.post(`/api/storeview/?view=${view}`).then(res => {
      this.setState({
        storeView: res.data
      })
    })
      /* this.setState({
        storeView: view
      }) */
  }

  render(){
    return (
      <div className="App">
        {!this.state.jonMode ? <></> : <div className="flier">
            <img src="https://i.imgur.com/Eb12YIh.png"/>
            <h1>JON MODE ACTIVE</h1>
            </div>}
        <Header switchView={this.switchView}/>
        <Store jonMode={this.state.jonMode} storeView={this.state.storeView}/>
      </div>
    );
  }
}

export default App;
