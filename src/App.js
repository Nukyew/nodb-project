import React from 'react';
import './App.css';
import Header from './components/Header'
import Store from './components/Store'

class App extends React.Component {
  state = {
    storeView: 'store',
    jonMode: false
  }

  jonModeCheck = () => {
    let rand = Math.ceil(Math.random() * 10)
    if (rand === 10){
      this.setState({
        jonMode: true
      })
    }
  }

  switchView = (view) => {
      this.setState({
        storeView: view
      })
  }

  render(){
    this.jonModeCheck()
    return (
      <div className="App">
        {!this.state.jonMode ? <></> : <div class="flier">
            <img src="https://i.imgur.com/Eb12YIh.png"/>
            <h1>JON MODE ACTIVATED</h1>
            </div>}
        <Header switchView={this.switchView}/>
        <Store jonMode={this.state.jonMode} storeView={this.state.storeView}/>
      </div>
    );
  }
}

export default App;
