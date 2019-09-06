import React from 'react';
import './App.css';
import Header from './components/Header'
import Store from './components/Store'

class App extends React.Component {
  state = {
    storeView: 'store',
  }

  switchView = (view) => {
      this.setState({
        storeView: view
      })
  }

  render(){
    return (
      <div className="App">
        <Header switchView={this.switchView}/>
        <Store storeView={this.state.storeView}/>
      </div>
    );
  }
}

export default App;
